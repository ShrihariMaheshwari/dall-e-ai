import mongoose from "mongoose";

const connectDB = (url) =>{
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then(() => console.log('MongoDB connection established'))
    .catch((err) => {console.log('Failed to connect to MongoDB')
                     console.log(err)})
}

export default connectDB