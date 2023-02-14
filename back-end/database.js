const { createPool } = require('mysql')
const pool = createPool({
    host: "bppkvpblmuwdiuexmmte-mysql.services.clever-cloud.com",
    user: "u8ykidsr7jw2gnbi",
    password: "7Tl4RLausu4pXEZgaZmW",
    database: "bppkvpblmuwdiuexmmte",
    waitForConnections: true,
    connectionLimit: 10
});

pool.getConnection((err, conn) => {
    if (err) console.log(err)
    console.log("Connected successfully")
})

// pool.query('select * from ingredients', (err, res) => {
//     console.log("Data:", res);
// })

module.exports = pool