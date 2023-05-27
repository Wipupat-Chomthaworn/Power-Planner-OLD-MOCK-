const express = require("express");

const router = express.Router();
const path = require("path");
const pool = require("../config");
// Get comment
router.get("/:blogId/comments", function (req, res, next) {});

// Create new comment
router.post("/:blogId/comments", async function (req, res, next) {
  console.log(req.body);
  await pool.query(
    "INSERT INTO comments VALUES (null,?,?,?,CURRENT_TIMESTAMP,null);",
    [req.params.blogId, req.body.comment, req.body.like]
  );

  res.send({
    message: `A ${req.body.comment} is added (ID: ${req.params.blogId})`, // แสดง ID ของ comment ที่เพิ่งถูก add
  });
  return;
});

// Update comment
router.put("/comments/:commentId", async function (req, res, next) {
  console.log(req.body);
  await pool.query(
    "UPDATE comments SET comments.blog_id=?, comments.comment=?, comments.like=?, comments.comment_date=?, comments.comment_by_id=? WHERE id=?;",
    [
      req.body.blog_id || 1,
      req.body.comment,
      req.body.like,
      req.body.comment_date,
      req.body.comment_by_id,
      req.params.commentId,
    ]
  );

  res.send({
    message: `Comment ID ${req.params.commentId} is updated.`,
    comment: {
      comment: `${req.body.comment}`,
      like: req.body.like,
      comment_date: req.body.comment_date,
      comment_by_id: req.body.comment_by_id,
      blog_id: req.params.blogId,
    }, //ดึงข้อมูล comment ที่เพิ่งถูก update ออกมา และ return ใน response กลับไปด้วย
  });
  return;
});

// Delete comment
router.delete("/comments/:commentId", async function (req, res, next) {
    await pool.query(
        "DELETE FROM comments WHERE id=?;",
        [
            req.params.commentId
        ]
      );
      res.send({
        "message": `Comment ID ${req.params.commentId} is deleted.`
    })
  return;
});

// Delete comment
router.put("/comments/addlike/:commentId",async function (req, res, next) {
    const [rows, fields] = await pool.query("SELECT * FROM comments WHERE id=?", [
        req.params.commentId,
      ]);
      console.log(rows)
      let likeNum = rows[0].like // index 0 because we only want 1 row 
      let blogId = rows[0].blog_id
      likeNum += 1
    await pool.query(
        "UPDATE comments SET comments.like=? WHERE id=?;",
        [
            likeNum,
          req.params.commentId,
          
        ]
      );
      res.send({
        "blogId": blogId,
        "commentId": req.params.commentId,
        "likeNum": likeNum + 1 //5 คือจำนวน like ของ comment ที่มี id = 20 หลังจาก +1 like แล้ว
    })
  return;
});

exports.router = router;
