module.exports = (function () {
    return {
      local: { // localhost
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'manager',
        database: 'HTF'
      },
      real: { // real server db info
        host: '',
        port: '',
        user: '',
        password: '!',
        database: ''
      },
      dev: { // dev server db info
        host: '',
        port: '',
        user: '',
        password: '',
        database: ''
      }
    }
  })();

/*
USE HTF;

create table messages (
  id int(11) NOT NULL AUTO_INCREMENT,
  message varchar(20) NOT NULL,
  fromid varchar(10) NOT NULL,
  toid varchar(10) NOT NULL,
  created int(11) NOT NULL,
PRIMARY KEY(id)
);
*/