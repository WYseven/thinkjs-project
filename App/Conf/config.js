module.exports = {
  //配置项: 配置值
  port: 8360, //监听的端口
  db_type: 'mysql', // 数据库类型
  db_host: '127.0.0.1', // 服务器地址
  db_port: '', // 端口
  db_name: 'thinkjs', // 数据库名
  db_user: 'root', // 用户名
  db_pwd: '', // 密码
  db_prefix: 'think_', // 数据库表前缀
  cookie_domain: "", //cookie有效域名
	cookie_path: "/",   //cookie路径
	cookie_timeout: 0, //cookie失效时间，0为浏览器关闭，单位：秒
  session_timeout: 0
};