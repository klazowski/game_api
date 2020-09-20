const config = {
  PORT: process.env.PORT || 3001,
  mysql: {
    address: process.env.MYSQL_ADDRESS || 'localhost',
    port: process.env.MYSQL_PORT || '3306',
    database: process.env.MYSQL_DB || 'game',
    user: process.env.MYSQL_USER || 'user',
    password: process.env.MYSQL_PASSWD || 'passwd',
  },
};

export default config;
