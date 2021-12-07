const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Comment } = require("../../models")

router.get('/', (req, res) => {
    Comment.findAll()
    .then((commentData) => {
        res.json((commentData))
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Comment.create({
        user_id: req.session.user_id,
        comment_text: req.body.comment_text,
        post_id: req.body.post_id
    })
    .then(commentData => res.json(commentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(commentData => {
        if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id!'})
        return;
        }
        res.json(commentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
