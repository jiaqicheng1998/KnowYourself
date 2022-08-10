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
        img_url: "https://i0.wp.com/www.additudemag.com/wp-content/uploads/2022/04/Calming-Triggered-Emotions-Saunders_1920x1080.jpg",
        article_id: 2
      },
      {
        img_url: "https://www.law365.co/hubfs/Imported_Blog_Media/mindfulness-resized.jpg",
        article_id: 2
      },
      {
        img_url: "https://static.wixstatic.com/media/287698_fe167ff8913243199382a1b2f6c16da0~mv2.jpg/v1/fill/w_720,h_500,al_c,q_90/287698_fe167ff8913243199382a1b2f6c16da0~mv2.jpg",
        article_id: 3
      },
      {
        img_url: "https://img.freepik.com/premium-vector/being-introvert-extravert-concept_140689-3415.jpg",
        article_id: 3
      },
      {
        img_url: "https://1sikgj46i2w02qt7g02ati3b-wpengine.netdna-ssl.com/wp-content/uploads/love-background-autism-spectrum.jpg",
        article_id: 4
      },
      {
        img_url: "https://i.pinimg.com/736x/b0/e3/1c/b0e31c16e4d4cb3c7b8052aa1aa0d0fb.jpg",
        article_id: 4
      },
      {
        img_url: "https://static01.nyt.com/images/2022/08/05/well/05BURST-SLEEP-EXPERT_1/05BURST-SLEEP-EXPERT_1-blog480.jpg",
        article_id: 5
      },
      {
        img_url: "https://spunout.ie/wp-content/uploads/elementor/thumbs/how-to-get-a-good-nights-sleep-p8uoe39ver443c26m1xor1xcw5s4wpg86jvsacaens.jpg",
        article_id: 5
      },
      {
        img_url: "https://restonic.com/wp-content/uploads/2016/06/25-Matt-Walkers-Sleeping-with-Science-TED-Talks-series-post-1024x1024.jpg",
        article_id: 6
      },
      {
        img_url: "https://cdn.shopify.com/s/files/1/2161/9741/files/Yogasleep_logo_rgb_Lock-up-ShopifySocialIMAGE-1200x628_432861e1-ce2d-4315-b75c-c3fb6d43c7e0.png",
        article_id: 6
      },
      {
        img_url: "https://cppvillage.com/wp-content/uploads/2020/01/selfcare.jpg",
        article_id: 7
      },
      {
        img_url: "https://calyouth.org/wp-content/uploads/2021/03/3827041.jpg",
        article_id: 7
      },
      {
        img_url: "https://5lovelanguages.com/img/2735da70-8d49-4c07-9867-7e5d2ba69c79/og_quizzes_lovelanguage.jpg",
        article_id: 8
      },
      {
        img_url: "https://static01.nyt.com/images/2021/07/25/fashion/15interintimate-relationships/15interintimate-relationships-mediumSquareAt3X.jpg",
        article_id: 8
      },
      {
        img_url: "https://i0.wp.com/s3.amazonaws.com/heights-photos/wp-content/uploads/2021/04/22211238/meditating-.png",
        article_id: 9
      },
      {
        img_url: "https://post.healthline.com/wp-content/uploads/2021/02/984847-10-Items-You-Need-to-Create-a-Mindfulness-Corner-at-Home_Facebook.jpg",
        article_id: 9
      },
      {
        img_url: "https://www.massagefremantle.com.au/img/anxiety-and-depression.jpg",
        article_id: 10
      },
      {
        img_url: "https://images.everydayhealth.com/images/coping-with-depression-a-guide-to-good-treatment-1440x810.jpg",
        article_id: 10
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {})
  }
};
