import mongoose from "mongoose";
const MONGO_URI = 'mongodb+srv://ajmeerajagadishwar2611:0r1pwDZqBF1hb8jj@cluster0.jrati.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;

