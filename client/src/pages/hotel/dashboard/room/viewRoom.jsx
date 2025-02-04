import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Modal,
  Form,
  Input,
  Select,
  InputNumber,
  message,
} from "antd";
import axiosInstance from "../../../../apis/axiosInstance";
import BookedUsersTable from "./bookedUsers";

const ViewRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [roomData, setRoomData] = useState({});
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    const id = localStorage.getItem("travel_guide_hotel_id");
    if (!id) {
      console.log("Login again");
      return;
    }
    getData(id);
  }, [trigger]);

  const getData = async (id) => {
    try {
      const response = await axiosInstance.get(`/rooms/hotel/${id}`);
      if (response.status === 200) {
        setRoomData(response.data.data);
      }
    } catch (error) {
      console.log("Error on fetching room data", error);
    }
  };
  const showModal = () => {
    form.setFieldsValue(roomData);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleUpdate = async (values) => {
    setLoading(true);
    try {
      const totalRooms = parseInt(values.acRooms) + parseInt(values.nonAcRooms);
      // Add your API call here to update the room
      console.log('value', values)
      const res = await axiosInstance.patch(`/rooms/${roomData._id}`, {...values, totalRooms});
      if (res.status === 200) {
        message.success("Room updated successfully");
        setIsModalVisible(false);
        setTrigger(!trigger);
      }
    } catch (error) {
      message.error("Failed to update room");
    } finally {
      setLoading(false);
    }
  };
  if (!roomData || !roomData.totalRooms) {
    return (
      <div className="tw-h-screen tw-flex tw-justify-center">
        <h3 className="tw-text-center ">
          {" "}
          You haven't registerd your rooms yet!
        </h3>
      </div>
    );
  }
  return (
    <>
      <div className="view-room-container" style={{ padding: "24px" }}>
        <Card
          title="Room Details"
          extra={
            <Button type="primary" onClick={showModal}>
              Edit Room
            </Button>
          }
          style={{ margin: "0 auto" }}
        >
          <div className="tw-w-full tw-flex tw-justify-center">
            <img
              src="https://picsum.photos/200/300"
              className="tw-w-auto tw-h-full"
              alt=""
            />
          </div>
          <div
            className="room-info tw-mt-10"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <div className="info-item">
              <h5>Total Rooms</h5>
              <p>{roomData.totalRooms}</p>
            </div>
            <div className="info-item">
              <h5>AC Rooms</h5>
              <p>{roomData.acRooms}</p>
            </div>
            <div className="info-item">
              <h5>Non-AC Rooms</h5>
              <p>{roomData.nonAcRooms}</p>
            </div>
            <div className="info-item">
              <h5>AC Room Price</h5>
              <p>₹{roomData.acRoomPrice}/night</p>
            </div>
            <div className="info-item">
              <h5>Non-AC Room Price</h5>
              <p>₹{roomData.nonAcRoomPrice}/night</p>
            </div>
            <div className="info-item">
              <h5>Check-in Time</h5>
              <p>{roomData.checkInTime}</p>
            </div>
            <div className="info-item">
              <h5>Check-out Time</h5>
              <p>{roomData.checkOutTime}</p>
            </div>
          </div>
        </Card>
        <BookedUsersTable />
        <Modal
          title="Edit Room Details"
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          width={600}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleUpdate}
            initialValues={roomData}
          >
            {/* AC Rooms */}
            <Form.Item
              name="acRooms"
              label="AC Rooms"
              rules={[
                { required: true, message: "AC rooms is required!" },
                { type: "number", min: 0, message: "Cannot be negative!" },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>

            {/* Non-AC Rooms */}
            <Form.Item
              name="nonAcRooms"
              label="Non-AC Rooms"
              rules={[
                { required: true, message: "Non-AC rooms is required!" },
                { type: "number", min: 0, message: "Cannot be negative!" },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>

            {/* AC Room Price */}
            <Form.Item
              name="acRoomPrice"
              label="AC Room Price"
              rules={[
                { required: true, message: "AC room price is required!" },
                {
                  type: "number",
                  min: 0,
                  message: "Price cannot be negative!",
                },
              ]}
            >
              <InputNumber prefix="₹" style={{ width: "100%" }} />
            </Form.Item>

            {/* Non-AC Room Price */}
            <Form.Item
              name="nonAcRoomPrice"
              label="Non-AC Room Price"
              rules={[
                { required: true, message: "Non-AC room price is required!" },
                {
                  type: "number",
                  min: 0,
                  message: "Price cannot be negative!",
                },
              ]}
            >
              <InputNumber prefix="₹" style={{ width: "100%" }} />
            </Form.Item>

            {/* Check-in Time */}
            <Form.Item
              name="checkInTime"
              label="Check-in Time"
              rules={[
                { required: true, message: "Check-in time is required!" },
              ]}
            >
              <Input type="time" />
            </Form.Item>

            {/* Check-out Time */}
            <Form.Item
              name="checkOutTime"
              label="Check-out Time"
              rules={[
                { required: true, message: "Check-out time is required!" },
              ]}
            >
              <Input type="time" />
            </Form.Item>

            {/* Status */}


            <Form.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "8px",
                }}
              >
                <Button onClick={handleCancel}>Cancel</Button>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Update
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default ViewRoom;
