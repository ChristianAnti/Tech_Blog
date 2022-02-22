const commentRoutes = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// url is /api/comments

commentRoutes.get("/", async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        if (!commentData) {
            res.status(400).json("No user found");
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

commentRoutes.post("/:id", withAuth, async (req, res) => {
    console.log("god work")
    console.log(req.body)
    try {
        const commentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            post_id: req.params.id,
        });

        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = commentRoutes;