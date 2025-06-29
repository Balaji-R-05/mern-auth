import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verifyOTP: { type: String, default: '' },
    verifyOTPExpireAt: { type: Number, default: 0 },
    isAccountVerified: { type: Boolean, default: false },
    resetOTP: { type: String, default: '' },
    resetOTPExpireAt: { type: Number, default: 0 }
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
