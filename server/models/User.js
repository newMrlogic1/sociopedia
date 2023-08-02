import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please add firstname.'],
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: [true, 'Please add lastname.'],
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: [true, 'email is required.'],
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'password is required.'],
      min: 5,
    },
    picturePath: {
      type: String,
      default: '',
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
export default User;
