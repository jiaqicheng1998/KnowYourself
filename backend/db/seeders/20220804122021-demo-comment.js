'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        article_id: 1,
        content: "Very Useful. I feel much more better after I started to talk to my inner child and take notes on what I think of myself throughout the day!",
        user_id: 2
      },
      {
        article_id: 2,
        content: "Meditation is such an amazing experience that I want to share with you guys. It really helps clear up my thoughts and my mind. I suggest the music mentioned in the article!",
        user_id: 3
      },
      {
        article_id: 3,
        content: "My MBTI type is INTP-A. I feel like the most interesting thing about MBTI is that you can resonate with a lot of memes on reddit! To be serious, It really gives you an understanding of how your cognitive functions work.",
        user_id: 1
      }
    ])

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {})
  }
};
