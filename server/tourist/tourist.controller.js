const { TouristModel } = require("./tourist.model");
const jwt = require("jsonwebtoken");
const tourists = require("../Admin/touristPlaces");
const bookingSchema = require("../Hotel/bookingSchema");
const taxiBooking = require("../Taxi/taxiBooking");
const booking = require("../Guide/booking");
const touristPlaces = require("../Admin/touristPlaces");
const secret = "your-secret-key"; // Replace this with your own secret key
const { hashPassowrd, comparePassword } = require("../utils/hanldePasswordEnc");

const createToken = (user) => {
  return jwt.sign({ userId: user._id }, secret, { expiresIn: "1h" });
};

const multer = require("multer");
const { generateAccessToken } = require("../utils/handleToken");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, JPG and PNG files are allowed."));
  }
};
const touristSignupUploads = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
}).fields([
  { name: "touristPhoto", maxCount: 1 },
  { name: "idPhoto", maxCount: 1 },
]);

//User Registration

const touristSignup = async (req, res, next) => {
  try {
    const touristPhoto = req.files.touristPhoto
      ? req.files.touristPhoto[0].path
      : null;
    const idPhoto = req.files.idPhoto ? req.files.idPhoto[0].path : null;
    const { name, email, country, gender, password, phoneNumber, idType } =
      req.body;
      
      p
    const hashedPassword = await hashPassowrd(password);
    const tourist = new TouristModel({
      name,
      email,
      country,
      gender,
      password: hashedPassword,
      phoneNumber,
      idType,
      idPhoto,
      touristPhoto,
    });
    await tourist.save();
    return res.status(201).json({
      message: "Tourist registration completed successfully",
      data: tourist,
    });
  } catch (error) {
    next(error);
  }
};

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  console.log("t1", token);
  console.log("secret", secret);
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  jwt.verify(token, secret, (err, decodedToken) => {
    console.log(decodedToken);
    if (err) {
      return res.status(401).json({ messamsgge: "Unauthorized", err: err });
    }

    req.user = decodedToken.userId;
    next();
    return res.status(200).json({ msg: "ok", user: decodedToken.userId });
  });
  console.log(req.user);
};

//Login User --finished

//View all Users

const viewUsers = (req, res) => {
  TouristModel.find()
    .exec()
    .then((data) => {
      if (data.length > 0) {
        res.json({
          status: 200,
          msg: "Data obtained successfully",
          data: data,
        });
      } else {
        res.json({
          status: 200,
          msg: "No Data obtained ",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not Inserted",
        Error: err,
      });
    });
};

// view User finished

//update User by id
const editUserById = (req, res) => {
  TouristModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      gender: req.body.gender,
      city: req.body.city,
      country: req.body.country,
      contact: req.body.contact,
      email: req.body.email,
      idtype: req.body.idtype,
      idnumb: req.body.idnumb,
    }
  )
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Updated successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        msg: "Data not Updated",
        Error: err,
      });
    });
};

//View  customer by ID

const vieUserById = (req, res) => {
  TouristModel.findOne({ _id: req.params.id })
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "Data obtained successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        msg: "No Data obtained",
        Error: err,
      });
    });
};

//del  customer by ID

// const delUserById=(req,res)=>{
//   TouristModel.findByIdAndDelete({_id:req.params.id}).exec()
//   .then(data=>{

//     console.log(data);
//     res.json({
//         status:200,
//         msg:"Data obtained successfully",
//         data:data
//     })

// }).catch(err=>{
//   console.log(err);
//     res.json({
//         status:500,
//         msg:"No Data obtained",
//         Error:err
//     })
// })
// }

//del  customer by ID

const delUserById = async (req, res) => {
  await bookingSchema
    .deleteMany({ custid: req.params.id })
    .exec()
    .then((data1) => {
      console.log("deleted");
    });
  await taxiBooking
    .deleteMany({ custid: req.params.id })
    .exec()
    .then((data2) => {
      console.log("deleted");
    });
  await booking
    .deleteMany({ custId: req.params.id })
    .exec()
    .then((data3) => {
      console.log("deleted");
    });
  await touristPlaces
    .deleteMany({ custId: req.params.id })
    .exec()
    .then((data4) => {
      console.log("deleted");
    });
  await TouristModel.findByIdAndDelete({ _id: req.params.id })
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "Data obtained successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        msg: "No Data obtained",
        Error: err,
      });
    });
};

//rest forgot password
const forgotPassword = (req, res) => {
  TouristModel.findOne({ email: req.body.email })
    .exec()
    .then((data) => {
      if (data == null) {
        res.json({
          status: 500,
          msg: "User not Found",
        });
      } else {
        TouristModel.findOneAndUpdate(
          { email: req.body.email },
          {
            password: req.body.password,
          }
        )
          .exec()
          .then((data) => {
            res.json({
              status: 200,
              msg: "Updated successfully",
            });
          })
          .catch((err) => {
            res.json({
              status: 500,
              msg: "Data not Updated",
              Error: err,
            });
          });
      }
    });
};
//finished -- forgot password

const bookPackage = (req, res) => {
  const newUser = new TouristModel({
    packageId: req.body.packageId,
    custId: req.body.custId,
    doj: req.body.doj,
    comments: req.body.comments,
  });
  newUser
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Inserted successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not Inserted",
        Error: err,
      });
    });
};

//View places by customer

const viewMyPlceasByCustId = (req, res) => {
  tourists
    .find({ custId: req.params.id })
    .exec()
    .then((data) => {
      if (data.length > 0) {
        console.log(data);
        res.json({
          status: 200,
          msg: "Data obtained successfully",
          data: data,
        });
      } else {
        res.json({
          status: 500,
          msg: "No Data obtained",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        msg: "No Data obtained",
        Error: err,
      });
    });
};

//add new tourist plase by cust

const addPlace = (req, res) => {
  const newCustomer = new tourists({
    district: req.body.district,
    city: req.body.city,
    loc: req.body.loc,
    travelmode: req.body.travelmode,
    distance: req.body.distance,
    locType: req.body.locType,
    image: req.file,
    addedby: "customer",
    isactive: false,
    lat: req.body.lat,
    lon: req.body.lon,
    custId: req.params.id,
  });
  newCustomer
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Inserted successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not Inserted",
        Error: err,
      });
    });
};

module.exports = {
  touristSignup,
  touristSignupUploads,
  vieUserById,
  editUserById,
  viewUsers,
  delUserById,
  forgotPassword,
  bookPackage,
  addPlace,
  vieUserById,
  viewMyPlceasByCustId,
};
