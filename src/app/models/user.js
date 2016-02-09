/**
 * Created by soriin on 2/8/2016.
 */
import mongoose from 'mongoose';

var userSchema = mongoose.Schema({
  displayName: String,
  email: String,
  firstName: String,
  lastName: String,
  inGameName: String
});

var user = mongoose.model('User', userSchema);
export default user;