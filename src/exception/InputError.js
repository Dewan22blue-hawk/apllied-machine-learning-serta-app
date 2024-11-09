const ClientError = require("../exception/ClientError");

class InputError extends ClientError {
  constructor(message) {
    super(message);
    this.name = "Input Error";
  }
}

module.exports = InputError;
