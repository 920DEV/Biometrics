import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    sNo: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    aadharNo: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    address: { type: String, required: true },
    contactNo: { type: String, required: true },
},{timestamps:true})

const User = mongoose.model('User', userSchema);

export default User;