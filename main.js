const query = require('./util/sql');

const m = async () => {
  const s = await query(`SELECT * from user`);
  console.log(s);
}

m()