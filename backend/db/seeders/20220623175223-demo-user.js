'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Psyche Soma',
        hashedPassword: bcrypt.hashSync('password'),
        bio: "Hi, we're Psyche and Soma Psychotherapy Group, Our therapists believe that symptoms are signals and messengers from our Psyche and physical bodies that want to help us heal. We believe that all parts of a human being are valuable, play a role, and even contradict one another.",
        profile_pic: "https://mindbodygreen-res.cloudinary.com/images/w_767,q_auto:eco,f_auto,fl_lossy/org/6wrm8bhqdk5ebvrd8/energy-healing.jpg"
      },
      {
        email: 'user1@user.io',
        username: 'David Gelles',
        hashedPassword: bcrypt.hashSync('password'),
        bio: "Climate reporter and former Corner Office columnist at @NYTimes. Author of NYT bestseller ‘The Man Who Broke Capitalism.' http://tinyurl.com/2p98zww7",
        profile_pic: "https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg"
      },
      {
        email: 'user2@user.io',
        username: 'Kendra Cherry',
        hashedPassword: bcrypt.hashSync('password'),
        bio: "Author, Psychosocial Rehabilitation Specialist, Educator. Educational consultant and speaker focused on helping students learn about and enjoy psychology.",
        profile_pic: "https://www.verywellmind.com/thmb/odNguY9K9jNz8M1v2y2XKu_05CI=/264x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/IMG_9791-89504ab694d54b66bbd72cb84ffb860e.jpg"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Psyche Soma', 'David Gelles', 'Kendra Cherry'] }
    }, {});
  }
};