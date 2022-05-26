const userModel = require('../models/user.model');

class userService {

  async createUser(userBody){
    userBody.save(userBody);
    return userBody;
  }
}

module.exports = userService;