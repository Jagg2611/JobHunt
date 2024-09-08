import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:'dt41ug5qo',
    api_key:'462969554453849',
    api_secret:'NAqdX2AWtt_xwFezEGQ8Cr5H_UA'
});
export default cloudinary;