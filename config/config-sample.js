module.exports = {
  'development': {
    'username': 'DATABASE_USERNAME',
    'password': 'DATABASE_PASSWORD',
    'database': 'sellMyServices',
    'host': 'localhost',
    'dialect': 'mysql',
    'superSecret': 'SECRET',
    'latitudeThreshold': 0.3,
    'longitudeThreshold': 0.3,
    'tokenMaxAge': 2592000,
    'tokenName': 'authToken',
    'logLevel': 'debug'
  },
  'production': {
    'username': 'DATABASE_USERNAME',
    'password': 'DATABASE_PASSWORD',
    'database': 'sellMyServices',
    'host': 'localhost',
    'dialect': 'mysql',
    'superSecret': 'SECRET',
    'latitudeThreshold': 0.3,
    'longitudeThreshold': 0.3,
    'tokenMaxAge': 2592000,
    'tokenName': 'authToken',
    'logLevel': 'info'
  }
};
