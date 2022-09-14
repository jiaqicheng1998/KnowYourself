'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Results', [
      {
        title: "The 'Blob Tree' Test",
        result: 'Your go with the flow. You prefer happiness and comfort in your mind rather than abundance in material world. You are not very revolutional. You do not like it when your peaceful day-to-day life are interrupted. Same mindset applies to your way of chasing your dream.',
        user_id: 1
      },
      {
        title: "The 'Blob Tree' Test",
        result: 'Your are popular among your friends. Your are very special to your friends. When they are happy, you would love to share their joy. When they are facing difficulties, you are the first one to offer help. Your kindness makes people love you.',
        user_id: 2
      },
      {
        title: "The 'Blob Tree' Test",
        result: 'you have got the tendency to keep to yourself, you are also frequently anxious and would normally avoid other people.',
        user_id: 3
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Results', null, {})
  }
};
