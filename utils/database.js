import mongoose from "mongoose";

let isConnected = false; // track the connection status

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDb is already connected');
        return;
    }

    try{
        await mongoose.connect(process.env.mongoDb_URL, { 
            dbName: "sharePrompts",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;

        console.log('MongoDb connected');
    } catch (error) {
        console.log('Error connecting to MongoDb', error);
    }
};