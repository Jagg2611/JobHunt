import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: "danyyvelx",
  api_key: "732496999624534",
  api_secret: "im1RmW4ONvwWFlRtwIWpILVX68Y",
});
export default cloudinary;