const query = require('./util/sql');

const m = async () => {
  const s = await query(`SELECT target_url from visit_log WHERE referer_url = "http://test2.coldlar.com/s?page=product&from=zhp" AND target_url like "%/createOrder/%" GROUP BY target_url;`);
  const arr = [], array = []
  for (const x of s) {
    const no = /\/createOrder\/(.*)\?/.exec(x.target_url)[1]
    // array.push(await query(`SELECT * from user_cash_buy_order WHERE order_no=${no};`))
    arr.push(no)
  }
  console.log(arr);
}

m()