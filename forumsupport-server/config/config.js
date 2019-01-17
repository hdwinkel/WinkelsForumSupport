var config = {

  database: {
    connectionString: "mongodb://localhost:27017/forumdb",
    databaseName: "forumdb"
  },
  
  debug: {
    database: {
      connectionString: "mongodb://localhost:27017/forumdb-dev",
      databaseName: "forumdb-dev"
    }
  }

};

module.exports = config;
