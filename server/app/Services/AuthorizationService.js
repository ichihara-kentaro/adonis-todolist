const InvalidAccessException = use ('App/Exceptions/InvalidAccessException');
const ResourceNoExistException = use ('App/Exceptions/ResourceNoExistException');

class AuthorizationService {
  verifyPermission(resource, user) {
    if(!resource) {
      throw new ResourceNoExistException();
    }

    if (resource.user_id !== user.id) {
      throw new InvalidAccessException();
    }
  }
}

module.exports = new AuthorizationService();
