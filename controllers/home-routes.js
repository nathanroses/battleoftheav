const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

// get the home page
router.get("/", (req, res) => {
  //find all posts
  Post.findAll({
    attributes: [
      'id',
      'character1',
      'character2',
      'post_body',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count'],
    ],
    include: [
      {
        // include the comment model to obtain length of comments. This will later be used to show the user how many replies there are to a debate.
        model: Comment,
      },
      {
        // include user module to grab usernames
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(postData => {
    // get the results in a more simple manner
    const posts = postData.map(post => post.get({ plain: true }));
    // render the page
    res.render("homepage", { posts,
    loggedIn: req.session.loggedIn });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// set this up to grab a specific post id and display it on the webpage in the future
router.get("/post/:id", (req, res) => {
  // find a single post when user clicks on a post
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'character1',
      'character2',
      'post_body',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count'],
    ],
    include: [
      {
        // include comments to post them on the page
      model: Comment,
      include: [
        {
          // include usernames to use on comments
          model: User,
          attributes: ['username']
        },
        ]
      },
      {
        // include username for the main post
          model: User,
          attributes: ['username']
        }
    ]
  }).then(postData => {
    //make the postdata simpler to use
    const post = postData.get({ plain: true });
    // render to page
    res.render("single-post", { post,
      loggedIn: req.session.loggedIn});
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
  
});

// get the main page
router.get("/homepage", (req, res) => {
  res.render("homepage",
  { loggedIn: req.session.loggedIn });
});

router.get("/forum", (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'character1',
      'character2',
      'post_body',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count'],
    ],
    include: [
      {
        // include the comment model to obtain length of comments. This will later be used to show the user how many replies there are to a debate.
        model: Comment,
      },
      {
        // include user module to grab usernames
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(postData => {
    // get the results in a more simple manner
    const posts = postData.map(post => post.get({ plain: true }));
    // render the page
    res.render("forum", { posts,
    loggedIn: req.session.loggedIn });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get("/login", (req, res) => {
  res.render("login", {
    loggedIn: req.session.loggedIn
  });
});

router.get("/create", (req, res) => {
  res.render("create", {
    loggedIn: req.session.loggedIn
  });
})

module.exports = router;