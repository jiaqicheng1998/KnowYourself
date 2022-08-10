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
        profile_pic: "https://ae01.alicdn.com/kf/H853063a9699c42129c65115a8f7ace60j/Anime-NANA-Osaki-Mouse-Pad-Vintage-Manga-Nana-Ai-Yazawa-Gaming-Desk-Mat-Gift-Desk-Pad.jpg"
      },
      {
        email: 'user1@user.io',
        username: 'David Gelles',
        hashedPassword: bcrypt.hashSync('password'),
        bio: "Climate reporter and former Corner Office columnist at @NYTimes. Author of NYT bestseller ‘The Man Who Broke Capitalism.' http://tinyurl.com/2p98zww7",
        profile_pic: "https://m.media-amazon.com/images/I/611rBE+vcCL._AC_SY450_.jpg"
      },
      {
        email: 'user2@user.io',
        username: 'Kendra Cherry',
        hashedPassword: bcrypt.hashSync('password'),
        bio: "Author, Psychosocial Rehabilitation Specialist, Educator. Educational consultant and speaker focused on helping students learn about and enjoy psychology.",
        profile_pic: "https://wallpaperaccess.com/full/6295120.jpg"
      },
      {
        email: "user3@user.io",
        username: 'Know Yourself',
        hashedPassword: bcrypt.hashSync('password'),
        bio: "Know Yourself, Love Yourself, and Become Yourself.",
        profile_pic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/majo013-1626936419.jpg"
      },
      {
        email: "user4@user.io",
        username: 'Yui Hirasawa',
        hashedPassword: bcrypt.hashSync('password'),
        bio: "To the me back then, you don’t need to worry. You’ll soon find something you can do, something you can set your heart on.",
        profile_pic: "https://media.tenor.com/images/60b05fed38ae888bf2a5dcb0e8faa593/tenor.png"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};