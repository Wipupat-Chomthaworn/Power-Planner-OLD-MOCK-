const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/", async function (req, res, next) {
  try {
       let query = `SELECT a.*, b.file_path FROM blogs AS a LEFT JOIN 
   (SELECT * FROM images WHERE main=1) AS b ON a.id = b.blog_id`
   let params = []
   if (req.query.query_text){
     query = query + ` WHERE a.title LIKE ?`
     params = [`%${req.query.query_text}%`]
   }
   const [rows, fields] = await pool.query(query, params);
   return res.render("index", { 
     search: req.query.query_text || '', 
     blogs: rows
   });
    return res.render("index", { blogs: rows });
  } catch (err) {
    return next(err)
  }
});

exports.router = router;
