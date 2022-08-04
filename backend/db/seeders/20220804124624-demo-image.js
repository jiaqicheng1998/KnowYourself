'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        img_url: "https://psycheandsomatherapy.com/wp-content/uploads/2021/03/adult-self-inner-child-683x1024.jpg",
        article_id: 1
      },
      {
        img_url: "https://psycheandsomatherapy.com/wp-content/uploads/2021/03/curious-kids-1024x683.jpg",
        article_id: 1
      },
      {
        img_url: "https://www.verywellmind.com/thmb/udD6Gb3w5MPvGPPoNJPnILUVucQ=/3125x1758/smart/filters:no_upscale()/meditation-4157199_round2_standardsizing-7f47dee543b74e3282f6604e8e9ef126.png",
        article_id: 2
      },
      {
        img_url: "https://www.law365.co/hubfs/Imported_Blog_Media/mindfulness-resized.jpg",
        article_id: 2
      },
      {
        img_url: "https://thumbs.dreamstime.com/z/mbti-personality-cartoon-characters-set-flat-represents-personalities-typology-isolated-white-backgorund-203051873.jpg",
        article_id: 3
      },
      {
        img_url: "https://clockify.me/blog/wp-content/uploads/2021/03/mbti-personality-chart-types-productivity.png",
        article_id: 3
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {})
  }
};
