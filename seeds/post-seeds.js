const { Post } = require('../models');

const postdata = [
  {
    character1: 'Goku',
    character2: 'Superman',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus. Justo nec ultrices dui sapien eget.',
    user_id: 10
  },
  {
    character1: 'Madara',
    character2: 'Aizen',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis neque velit. Vivamus porta feugiat felis, sit amet hendrerit dolor.',
    user_id: 8
  },
  {
    character1: 'Vegeta.',
    character2: 'Chris Hemsworth',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur est vel diam dignissim vulputate. Maecenas dictum purus a enim.',
    user_id: 1
  },
  {
    character1: 'Sasuke',
    character2: 'Ichigo',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur est vel diam dignissim vulputate. Maecenas dictum purus a enim.',
    user_id: 4
  },
  {
    character1: 'Sora',
    character2: 'Link',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et risus efficitur, pellentesque velit sed, ultrices metus. Duis tristique, metus.',
    user_id: 7
  },
  {
    character1: 'Pit',
    character2: 'Shulk',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet velit non orci facilisis egestas. Duis venenatis urna a metus.',
    user_id: 4
  },
  {
    character1: 'Iron Man',
    character2: 'Lex Luthor',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper, lacus a porttitor faucibus, odio erat tincidunt enim, quis hendrerit.',
    user_id: 1
  },
  {
    character1: 'Daredevil',
    character2: 'Robin',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id enim dolor. Aliquam in lorem nibh. Mauris sed justo sed.',
    user_id: 1
  },
  {
    character1: 'Markiplier',
    character2: 'Omni-man',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae tincidunt lectus. Cras placerat, est vitae eleifend volutpat, nulla elit.',
    user_id: 9
  },
  {
    character1: 'Tighten',
    character2: 'Homelander',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut bibendum arcu. Cras eu urna tincidunt, dapibus nibh a, commodo.',
    user_id: 5
  },
  {
    character1: 'Me',
    character2: 'The Sun',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis facilisis nibh. Vivamus enim erat, laoreet eget porta eget, finibus.',
    user_id: 3
  },
  {
    character1: 'Mario',
    character2: 'Sonic',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et pulvinar dolor. Donec libero enim, mattis vel varius vel, lobortis.',
    user_id: 10
  },
  {
    character1: 'Nintendo',
    character2: 'Nintendo Fans',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend congue turpis, et lacinia odio vulputate porttitor. Aliquam efficitur velit.',
    user_id: 8
  },
  {
    character1: 'Mickey Mouse',
    character2: 'Bugs Bunny',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis risus tincidunt, aliquet risus feugiat, vestibulum metus. In consequat iaculis.',
    user_id: 3
  },
  {
    character1: 'Spider-Man',
    character2: 'Batman',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus massa et arcu scelerisque finibus. Quisque quis ante et lorem.',
    user_id: 3
  },
  {
    character1: 'Unstoppable Force',
    character2: 'Immovable Object',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum et massa ut sodales. Vivamus tincidunt nisl sit amet diam.',
    user_id: 7
  },
  {
    character1: 'Hulk',
    character2: 'Doomsday',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus risus nec lorem venenatis lobortis ac a leo. Curabitur sit.',
    user_id: 6
  },
  {
    character1: 'Character one',
    character2: 'Character two',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur elementum dolor et interdum. Maecenas ut fermentum augue. Curabitur accumsan.',
    user_id: 4
  },
  {
    character1: 'Character three',
    character2: 'Character four',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur, ligula non iaculis viverra, ex ante sollicitudin nisi, eu iaculis.',
    user_id: 6
  },
  {
    character1: 'Comma',
    character2: 'Semicolon',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget iaculis nisi. Proin at neque a erat tristique congue. Ut.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;