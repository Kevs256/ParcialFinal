import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/eco_store")
    .then(db=>console.log("Mongo database connected"))
    .catch(err=>console.log(err));
