const { TouristModel } = require("./tourist.model");
const jwt = require("jsonwebtoken");
const secret = "your-secret-key"; // Replace this with your own secret key
const { hashPassword } = require("../utils/hanldePasswordEnc");

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

    const hashedPassword = await hashPassword(password);
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


module.exports = {
  touristSignup,
  touristSignupUploads,
};
