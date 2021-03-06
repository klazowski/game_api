const config = {
  PORT: process.env.PORT || 3001,
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || '3306',
    database: process.env.MYSQL_DB || 'game',
    user: process.env.MYSQL_USER || 'user',
    password: process.env.MYSQL_PASSWORD || 'passwd',
    uri: process.env.MYSQL_URI || '',
  },
  mockDb: process.env.MOCK_DB || 'true',
};

export default config;
