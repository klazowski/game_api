import connection from './getConnection';

const verifyConnection = async () => {
  return await connection
    .authenticate()
    .then((error) => {
      console.log('Connection has been established successfully.');
      return true;
    })
    .catch((error) => {
      console.log('Unable to connect to the database:', error);
      return false;
    });
};

export { verifyConnection };
