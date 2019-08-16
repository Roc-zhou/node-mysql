# node-mysql

### install
```
git clone https://github.com/Roc-zhou/node-mysql.git

cd node-mysql

npm install 
```

### 创建表
```
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '姓名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
```
### 插入几条数据
```
INSERT INTO `user` (name,password) VALUES ('张三','zhangsan');
INSERT INTO `user` (name,password) VALUES ('李四','lisi');
INSERT INTO `user` (name,password) VALUES ('王五','wangwu');
INSERT INTO `user` (name,password) VALUES ('小明','xiaoming');
```

### 配制数据库
```
cd config

vim index.js

// todo
```

### 测试
```
node main.js
```