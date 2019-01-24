import mongoose from 'mongoose';

interface ICount extends mongoose.Document {
  name: String;
  customerCount: Number;
}

const countSchema = new mongoose.Schema({
  name: String,
  customerCount: Number
});

const Count = mongoose.model<ICount>('Count', countSchema);

export default Count;
