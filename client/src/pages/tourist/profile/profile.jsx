import React, { useEffect, useState } from "react";
import { Edit } from "lucide-react";
import { EditProfileForm } from "../../../Components/tourist/profile/editProfileForm";
import { ProfileImage } from "../../../Components/tourist/profile/profileImg";
import { TouristProfileModal } from "../../../Components/tourist/profile/profileModel";
import TouristNavbar from "../../../Components/tourist/navbar/TouristNavbar";
import Footer from "../../../Components/Footer/Footer";
import axiosInstance from "../../../apis/axiosInstance";

function TouristProfile() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    country: "United States",
    phoneNumber: "+1 234 567 8900",
    gender: "male",
    imageUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60",
    certificateUrl:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&auto=format&fit=crop&q=60",
  });
  useEffect(() => {
    const id = localStorage.getItem("travel_guide_tourist_id") || null;
    if (id) {
        getTouristData(id)
    }
  }, [])
  const getTouristData = async (id) => {
    try {
        const res = await axiosInstance.get(`/tourist/getTourist/${id}`);
        if (res.status === 200) {
            setProfile(res.data?.data);
        }
    } catch (error) {
        console.log("Error on get tourist data", error);   
    }
  }
  

  const handleSaveProfile = (updatedProfile) => {
    setProfile(updatedProfile);
    setIsEditModalOpen(false);
  };

  return (
    <div className="tw-min-h-screen tw-bg-gray-100">
      <TouristNavbar />
      <div className="tw-max-w-4xl tw-mx-auto tw-py-12 tw-px-4">
        <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-8">
          <div className="tw-flex tw-justify-end">
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-bg-blue-500 tw-rounded-md hover:tw-bg-blue-600"
            >
              <Edit className="tw-w-4 tw-h-4" />
              Edit Profile
            </button>
          </div>

          <ProfileImage
            imageUrl={profile.imageUrl}
            onOpenModal={() => setIsImageModalOpen(true)}
          />

          <div className="tw-text-center tw-mb-8">
            <h1 className="tw-text-2xl tw-font-bold tw-text-gray-900">
              {profile.name}
            </h1>
            <button
              onClick={() => setIsImageModalOpen(true)}
              className="tw-mt-2 tw-text-blue-500 hover:tw-text-blue-600 tw-text-sm tw-font-medium"
            >
              View Certificate
            </button>
          </div>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
            <div className="tw-space-y-4">
              <div>
                <h3 className="tw-text-sm tw-font-medium tw-text-gray-500">
                  Email
                </h3>
                <p className="tw-mt-1 tw-text-sm tw-text-gray-900">
                  {profile.email}
                </p>
              </div>
              <div>
                <h3 className="tw-text-sm tw-font-medium tw-text-gray-500">
                  Country
                </h3>
                <p className="tw-mt-1 tw-text-sm tw-text-gray-900">
                  {profile.country}
                </p>
              </div>
            </div>
            <div className="tw-space-y-4">
              <div>
                <h3 className="tw-text-sm tw-font-medium tw-text-gray-500">
                  Phone Number
                </h3>
                <p className="tw-mt-1 tw-text-sm tw-text-gray-900">
                  {profile.phoneNumber}
                </p>
              </div>
              <div>
                <h3 className="tw-text-sm tw-font-medium tw-text-gray-500">
                  Gender
                </h3>
                <p className="tw-mt-1 tw-text-sm tw-text-gray-900">
                  {profile.gender}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TouristProfileModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
      >
        <div className="tw-max-w-2xl tw-mx-auto">
          <img
            src={isImageModalOpen ? profile.certificateUrl : profile.imageUrl}
            alt="Certificate"
            className="tw-w-full tw-h-auto tw-rounded-lg"
          />
        </div>
      </TouristProfileModal>

      <TouristProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      >
        <div className="tw-max-w-2xl tw-mx-auto">
          <h2 className="tw-text-xl tw-font-bold tw-mb-4">Edit Profile</h2>
          <EditProfileForm
            profile={profile}
            onSave={handleSaveProfile}
            onCancel={() => setIsEditModalOpen(false)}
          />
        </div>
      </TouristProfileModal>
      <Footer />
    </div>
  );
}

export default TouristProfile;
