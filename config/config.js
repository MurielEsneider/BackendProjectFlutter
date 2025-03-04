require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'postgresql://flutterDB_owner:npg_eWuQE6O5kSIN@ep-gentle-unit-a5gvqd2j-pooler.us-east-2.aws.neon.tech/flutterDB?sslmode=require',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Permite conexiones SSL sin verificación estricta de certificado
      },
    },
  },
  test: {
    username: 'root',
    password: null,
    database: 'flutterBackend',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    use_env_variable: 'postgresql://flutterDB_owner:npg_eWuQE6O5kSIN@ep-gentle-unit-a5gvqd2j-pooler.us-east-2.aws.neon.tech/flutterDB?sslmode=require',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
};
