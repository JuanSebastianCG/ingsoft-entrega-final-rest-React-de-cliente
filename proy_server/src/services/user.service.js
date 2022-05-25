const userModel = require('../models/user');

class UserService{

  async createUser(userBody){
    userBody.save(userBody);
    return userBody;
  }

  async findAllUsers() {
    return userModel.find();
  }

  async findOneUser(userId) {
    return userModel.findOne({ _id: userId });
  }

  async deleteUser(userId) {
    const user = userModel.findById({ _id: userId });
    return userModel.deleteOne(user);
  }
}
module.exports = UserService;