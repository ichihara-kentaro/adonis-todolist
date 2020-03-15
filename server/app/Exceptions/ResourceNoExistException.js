'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ResourceNoExistException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    return response.status(404).json({
      error: 'resource did not exist',
    });
  }
}

module.exports = ResourceNoExistException
