'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [
      {
        title: "What is Inner Child Work?",
        content: `Inner Child Work is a trauma-informed approach to working with people who have experienced various forms of trauma, abuse, and neglect (either within the family or outside the family) earlier on in life. If you clicked to read this article, chances are, there is a part of you that is yearning for some care.

        Inner Child Work blends together frameworks of attachment theory, somatic (or body-based) therapies, Jungian Shadow work, Internal Family Systems, and psychodynamic theories. Many of these theories or types of therapy are rooted in the ideas that our past influences our present, our bodies and unconscious hold wisdom, and there is hope and potential for new connections to be made, within and without.
        
        One of the main components of Inner Child Work is the idea that we all have younger parts within us with different ages, difference experiences, and different needs. As we grow up into bigger bodies and more logical, conscious brains, our younger selves do not just disappear over time. When we get triggered and can not understand why, it is likely a younger part of us is online and very present, screaming for our attention. Oftentimes, as adults, we ignore these cries, we deny or dismiss, we freeze, we search for a solution to “fix it”. All of these can be trauma responses being replayed in adult life. We respond to our wounds in ways we learned as a kid and what helped keep us safe then.
        
        It is also important to note that if you are currently working with a psychotherapist or other helpers in a healing setting, or if you are even contemplating a healing journey, you have already begun Inner Child Work. You know something was not right and you know it is gotten you stuck in some ways. There is not necessarily a protocol or steps to take when doing this transformational work. Sometimes it takes a while and it is usually an ongoing process. For some, it becomes a life-long practice. Inner Child Work is about safe relationships, emotional and physical safety, consent, respecting all parts of a person, developing a competent and compassionate inner parent(s), learning to set healthy boundaries, healthy entitlement, and assertiveness, grieving the loss of childhood you needed and did not get, understanding human blindspots and limitations, how parents can pass along generations worth of trauma and trauma responses, and making room for fun, joy, and growth in service of your authentic Self.
        
        Inner Child Work also includes finding the glimmers. Learning to be more open and receptive to the joys, nourishment, and delight of just being. For many of us who had to grow up too quickly, who had to live in constant fear and need to protect ourselves or loved ones, who did not receive the warmth of a compassionate, competent adult, play, spontaneity, rest, and creativity may be harder to access. These aspects of a full life also become deadened when we live in societies or cultures that value hyper-independence, aggression against the feminine (relationships, feelings, embodiment), and over-working in order to make ends meet or to keep up with the ideal lifestyle.`,
        user_id: 1
      },
      {
        title: "How to Meditate",
        content: `Meditation is a simple practice available to all, which can reduce stress, increase calmness and clarity and promote happiness. Learning how to meditate is straightforward, and the benefits can come quickly. Here, we offer basic tips to get you started on a path toward greater equanimity, acceptance and joy. Take a deep breath, and get ready to relax. The Basics
        Setting aside time for formal meditation is an important way to establish a routine and get comfortable with the practice. Even just a few minutes a day can make a big difference.
        
        “Some people complain about taking time out of their day,” said Atman Smith, who teaches meditation to underserved communities in Baltimore. “Practice is important though. It is a tool you can use to bring yourself back to the present in stressful situations.”
        
        But we should not stop being mindful when we stop meditating. “The purpose of mindfulness meditation is to become mindful throughout all parts of our life, so that we are awake, present and openhearted in everything we do,” said Tara Brach, a popular meditation teacher based near Washington, D.C. “Not just when we are sitting on the cushion.”
        
        Mindfulness meditation is not about letting your thoughts wander. But it is not about trying to empty your mind, either. Instead, the practice involves paying close attention to the present moment — especially our own thoughts, emotions and sensations — whatever it is that is happening.
        
        In addition to basic meditation instructions, we have compiled guided meditations for a few popular exercises including the body scan, walking meditation and mindful eating. “Each of the applied mindfulness practices brings alive an experience that might otherwise be more automatic,” said Ms. Brach.
        
        Though meditating on your own is an essential part of a complete practice, the steady guidance of an experienced teacher can be invaluable, especially as you are getting started. Our minds wander so easily, and the clear instructions of a teacher can help bring us back to the present moment.`,
        user_id:2
      },
      {
        title: "How the Myers-Briggs Type Indicator Works",
        content: `Have you ever heard someone describe themselves as an INTJ or an ESTP and wondered what those cryptic-sounding letters could mean? What these people are referring to is their personality type based on the Myers-Briggs Type Indicator (MBTI).

        The Myers-Briggs Personality Type Indicator is a self-report inventory designed to identify a person's personality type, strengths, and preferences. The questionnaire was developed by Isabel Myers and her mother Katherine Briggs based on their work with Carl Jung's theory of personality types. Today, the MBTI inventory is one of the world's most widely used psychological instruments.
        
        This article discusses how the Myers-Briggs types were created, what the 16 different MBTI types are, and how this personality typing system works.
        
        The Development of the Myers-Briggs Test
        Both Myers and Briggs were fascinated by Jung's theory of psychological types and recognized that the theory could have real-world applications. During World War II, they began researching and developing an indicator that could be utilized to help understand individual differences.`,
        user_id: 3
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {})
  }
};
