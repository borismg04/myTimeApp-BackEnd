import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  token: {
    type: String,
  },
  confirmado: {
    type: Boolean,
    default: false,
  },
  }, {
  timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;

