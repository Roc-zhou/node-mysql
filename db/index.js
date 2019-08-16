const mysql = require("mysql");

// 创建 mysql 连接池并配置参数
const pool = mysql.createPool(require('../config/index.js'));
pool.connectionLimit = 10; // 连接池中可以存放的最大连接数量
pool.waitForConnections = true; // 连接使用量超负荷是否等待, false 会报错
pool.queueLimit = 0; // 每个连接可操作的 列数 上限, 0 为没有上限

// 对外暴漏从连接池中获取数据库连接的方法
module.exports = function() {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        console.log(" XXXXXXXXXXXXX Database Connection Failed XXXXXXXXXXXXX ");
        reject(err)
      } else {
        console.log(" √√√√√√√√√√ Database Connection Success √√√√√√√√√√ ");
        resolve(conn);
      }
    });
  });
};