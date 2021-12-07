const router = require("express").Router();
const {User, Comment, Post, Vote } = require('../../models')
const sequelize = require('../../config/connection')

router.get("/", (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'character1',
            'character2',
            'post_body',
            'created_at',
            'user_id',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count'],
        ],
        include: [
            {
                model: Comment,
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(postData => {
        res.json(postData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.get("/:id", (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_body',
            'character1',
            'character2',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count'],
          ],
        include: [
            {
            model: Comment,
            include: {
                model: User,
                attributes: ['username']
                }
            },
        {
            model: User,
            attributes: ['username']
        }
    ]
    }).then(postData => {
        res.json(postData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
    Post.create({
        character1: req.body.character1,
        character2: req.body.character2,
        post_body: req.body.post_body,
        user_id: req.session.user_id
    })
    .then(postData => {
        res.json(postData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.put('/upvote', (req, res) => {
    // custom static method created in models/Post.js
    Post.upvote({ ...req.body, user_id: req.session.user_id }, { Comment, User, Vote })
      .then(updatedVoteData => res.json(updatedVoteData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.put("/:id", (req, res) => {
    Post.update({
        post_body: req.body.post_body,
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(postData => {
        if (!postData) {
            res.status(404).json({ message: "No post found with that id!"})
            return;
        }
        res.json(postData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.delete("/:id", (req, res) => {
Post.destroy({
    where: {
        id: req.params.id
    }
    })
    .then(postData => {
        if (postData) {
            res.status(404).json({ message: "No post found with that id!"})
            return;
        }
        res.json(postData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

module.exports = router;