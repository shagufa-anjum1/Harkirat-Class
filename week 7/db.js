const mongoose = require('mongoose');

const schema = mongoose.schema;
const objectId = schema.objectId;

const userSchema = new schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String
});

const todoSchema = new schema({
  userId: objectId,
  title: String,
  done:{
    type: Boolean,
    default: false
  }
})

const userModel = mongoose.model('users', userSchema);
const todoModel = mongoose.model('todos', todoSchema);

module.exports = {
  userModel,
  todoModel
}