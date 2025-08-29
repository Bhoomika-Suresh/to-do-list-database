// // ✅ to create table
// db.query(`
//     CREATE TABLE IF NOT EXISTS todos (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         task VARCHAR(255) NOT NULL,
//         status VARCHAR(20) DEFAULT 'pending',
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     )
// `, err => {
//     if (err) throw err;
//     console.log("✅ Table ready");
// // })


//to create table in pg admin
// CREATE TABLE todos (
//     id SERIAL PRIMARY KEY,                  -- unique ID for each task
//     task VARCHAR(255) NOT NULL,             -- the to-do item text
//     status VARCHAR(20) DEFAULT 'pending',   -- can be 'pending' or 'completed'
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- when the task was added
// );
