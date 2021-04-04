import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const crouselSchema = new Schema({},{strict: false, collection: 'crousel'});

export const Crousel = mongoose.model('Crousel',crouselSchema);