import mongoose from 'mongoose';

const { Schema, model } = mongoose;
// Creating Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Item = model('item', ItemSchema);

export default Item;
