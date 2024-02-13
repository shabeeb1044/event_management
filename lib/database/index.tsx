import mongoose from 'mongoose'

const mongodbURI =  process.env.MONGODB_URI;
let cached =(global as any).mongoose || {conn:null,promise:null};


export const connectDatabase = async()=>{
    if(cached.conn) return cached.conn;
    if(!mongodbURI) throw new Error('MONGODB_URI is missing');

    cached.promise = cached.promise || mongoose.connect(mongodbURI,{
        dbName:'evently',
        bufferCommands:false,

    })

    cached.conn = await cached.promise;


}