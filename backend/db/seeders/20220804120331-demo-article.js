'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [
      {
        title: "What is Inner Child Work?",
        content: `
        <p>&nbsp; &nbsp; &nbsp; &nbsp; Inner Child Work is a trauma-informed approach to working with people who have experienced various forms of trauma, abuse, and neglect 
(either within the family or outside the family) earlier on in life. If you clicked to read this article, chances are, there is a part of you that is yearning for some 
care.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Inner Child Work blends together frameworks of attachment theory, somatic (or body-based) therapies, Jungian Shadow work, Internal 
Family Systems, and psychodynamic theories. Many of these theories or types of therapy are rooted in the idea that our past influences our present, our bodies, and our 
unconscious hold wisdom, and there is hope and potential for new connections to be made, within and without.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; One of the main components 
of Inner Child Work is the idea that we all have younger parts within us with different ages, different experiences, and different needs. As we grow up into bigger bodies 
and more logical, conscious brains, our younger selves do not just disappear over time. When we get triggered and can not understand why, it is likely a younger part of 
us is online and very present, screaming for our attention. Oftentimes, as adults, we ignore these cries, we deny or dismiss them, we freeze, and we search for a solution 
to “fix it”. All of these can be trauma responses being replayed in adult life. We respond to our wounds in ways we learned as a kid and what helped keep us safe then.
</p><p>&nbsp; &nbsp; &nbsp; &nbsp; It is also important to note that if you are currently working with a psychotherapist or other helpers in a healing setting, or if you 
are even contemplating a healing journey, you have already begun Inner Child Work. You know something was not right and you know it is gotten you stuck in some ways. There 
is not necessarily a protocol or steps to take when doing this transformational work. Sometimes it takes a while and it is usually an ongoing process. For some, it becomes 
a life-long practice. Inner Child Work is about safe relationships, emotional and physical safety, consent, respecting all parts of a person, developing a competent and 
compassionate inner parent(s), learning to set healthy boundaries, healthy entitlement, and assertiveness, grieving the loss of childhood you needed and did not get, 
understanding human blindspots and limitations, how parents can pass along generations worth of trauma and trauma responses, and making room for fun, joy, and growth 
in service of your authentic Self.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Inner Child Work also includes finding the glimmers. Learning to be more open and receptive to 
the joys, nourishment, and delight of just being. For many of us who had to grow up too quickly, who had to live in constant fear and need to protect ourselves or loved 
ones, who did not receive the warmth of a compassionate, competent adult, play, spontaneity, rest, and creativity may be harder to access. These aspects of a full life 
also become deadened when we live in societies or cultures that value hyper-independence, aggression against the feminine (relationships, feelings, embodiment), and 
over-working in order to make ends meet or to keep up with the ideal lifestyle.</p>
        `,
        user_id: 1,
        img_url: "https://psycheandsomatherapy.com/wp-content/uploads/2021/03/adult-self-inner-child-683x1024.jpg"
      },
      {
        title: "How to Meditate?",
        content: `
        <p>&nbsp; &nbsp; &nbsp; &nbsp; Meditation is a simple practice available to all, which can reduce stress, increase calmness and clarity and promote happiness. Learning 
how to meditate is straightforward, and the benefits can come quickly. Here, we offer basic tips to get you started on a path toward greater equanimity, acceptance, and 
joy. Take a deep breath, and get ready to relax. The Basics</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Setting aside time for formal meditation is an important way to establish 
a routine and get comfortable with the practice. Even just a few minutes a day can make a big difference.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; “Some people complain about 
taking time out of their day,” said Atman Smith, who teaches meditation to underserved communities in Baltimore. “Practice is important though. It is a tool you can use 
to bring yourself back to the present in stressful situations.”</p><p>&nbsp; &nbsp; &nbsp; &nbsp; But we should not stop being mindful when we stop meditating. “The 
purpose of mindfulness meditation is to become mindful throughout all parts of our life so that we are awake, present, and openhearted in everything we do,” said Tara 
Brach, a popular meditation teacher based near Washington, D.C. “Not just when we are sitting on the cushion.”</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Mindfulness meditation 
is not about letting your thoughts wander. But it is not about trying to empty your mind, either. Instead, the practice involves paying close attention to the present 
moment — especially our own thoughts, emotions, and sensations — whatever it is that is happening.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; In addition to basic meditation 
instructions, we have compiled guided meditations for a few popular exercises including the body scan, walking meditation, and mindful eating. “Each of the applied 
mindfulness practices brings alive an experience that might otherwise be more automatic,” said Ms. Brach.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Though meditating on your 
own is an essential part of a complete practice, the steady guidance of an experienced teacher can be invaluable, especially as you are getting started. Our minds wander 
so easily, and the clear instructions of a teacher can help bring us back to the present moment.</p>
        `,
        user_id: 2,
        img_url: "https://i0.wp.com/www.additudemag.com/wp-content/uploads/2022/04/Calming-Triggered-Emotions-Saunders_1920x1080.jpg",
      },
      {
        title: "How the Myers-Briggs Type Indicator Works?",
        content: `
        <p>&nbsp; &nbsp; &nbsp; &nbsp; Have you ever heard someone describe themselves as an INTJ or an ESTP and wondered what those cryptic-sounding letters could mean? 
What these people are referring to is their personality type based on the Myers-Briggs Type Indicator (MBTI).</p><p>&nbsp; &nbsp; &nbsp; &nbsp; The Myers-Briggs 
Personality Type Indicator is a self-report inventory designed to identify a person's personality type, strengths, and preferences. The questionnaire was developed 
by Isabel Myers and her mother Katherine Briggs based on their work with Carl Jung's theory of personality types. Today, the MBTI inventory is one of the world's 
most widely used psychological instruments. &nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; This article discusses how the Myers-Briggs types were created, what the 16 
different MBTI types are, and how this personality typing system works. &nbsp;</p><h3>&nbsp; &nbsp; &nbsp; &nbsp; The Development of the Myers-Briggs Test</h3><p>&nbsp; 
&nbsp; &nbsp; &nbsp; Both Myers and Briggs were fascinated by Jung's theory of psychological types and recognized that the theory could have real-world applications. 
During World War II, they began researching and developing an indicator that could be utilized to help understand individual differences.</p>
        `,
        user_id: 3,
        img_url: "https://static.wixstatic.com/media/287698_fe167ff8913243199382a1b2f6c16da0~mv2.jpg/v1/fill/w_720,h_500,al_c,q_90/287698_fe167ff8913243199382a1b2f6c16da0~mv2.jpg",
      },
      {
        title: "Self-Love and What It Means",
        content: `
        <h3>&nbsp; &nbsp; &nbsp; &nbsp;What is self-love?&nbsp;</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; Before a person is able to practice it, first we need to understand what 
it means.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Self-love is a state of appreciation for oneself that grows from actions that support our physical, psychological, and 
spiritual growth. Self-love means having a high regard for your own well-being and happiness. Self-love means taking care of your own needs and not sacrificing your 
well-being to please others. Self-love means not settling for less than you deserve.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Self-love can mean something different for 
each person because we all have many different ways to take care of ourselves. Figuring out what self-love looks like for you as an individual is an important part 
of your mental health. ##What does self-love mean to you? For starters, it can mean:</p><ul><li>&nbsp; &nbsp; &nbsp; &nbsp; Talking to and about yourself with 
love</li><li>&nbsp; &nbsp; &nbsp; &nbsp; Prioritizing yourself</li><li>&nbsp; &nbsp; &nbsp; &nbsp; Giving yourself a break from self-judgment</li><li>&nbsp; &nbsp; 
&nbsp; &nbsp; Trusting yourself</li><li>&nbsp; &nbsp; &nbsp; &nbsp; Being true to yourself</li><li>&nbsp; &nbsp; &nbsp; &nbsp; Being nice to yourself</li><li>&nbsp; 
&nbsp; &nbsp; &nbsp; Setting healthy boundaries</li><li>&nbsp; &nbsp; &nbsp; &nbsp; Forgiving yourself when you are not being true or nice to yourself</li></ul><p>&nbsp; 
&nbsp; &nbsp; &nbsp; For many people, self-love is another way to say self-care. To practice self-care, we often need to go back to the basics and</p><ul><li>&nbsp; 
&nbsp; &nbsp; &nbsp; Listen to our bodies</li><li>&nbsp; &nbsp; &nbsp; &nbsp; Take breaks from work and move/stretch.</li><li>&nbsp; &nbsp; &nbsp; &nbsp; Put the phone 
down and connect to yourself or others, or do something creative.</li><li>&nbsp; &nbsp; &nbsp; &nbsp; Eating healthily, but sometimes indulging in your favorite foods.
</li><li>&nbsp; &nbsp; &nbsp; &nbsp; Self-love means accepting yourself as you are in this very moment for everything that you are. It means accepting your emotions 
for what they are and putting your physical, emotional, and mental well-being first.</li></ul><h3>&nbsp; &nbsp; &nbsp; &nbsp;How and Why to Practice Self Love</h3><p>&nbsp; 
&nbsp; &nbsp; &nbsp; So now we know that self-love motivates you to make healthy choices in life. When you hold yourself in high esteem, you're more likely to choose 
things that nurture your well-being and serve you well. These things may be in the form of eating healthy, exercising, or having healthy relationships.</p><p><strong>&nbsp; 
&nbsp; &nbsp; &nbsp; Ways to practice self-love include:</strong></p><ul><li>&nbsp; &nbsp; &nbsp; &nbsp;Becoming mindful. People who have more self-love tend to know 
what they think, feel, and want.</li><li>&nbsp; &nbsp; &nbsp; &nbsp; Taking actions based on need rather than want. By staying focused on what you need, you turn away 
from automatic behavior patterns that get you into trouble, keep you stuck in the past, and lessen self-love.</li><li>&nbsp; &nbsp; &nbsp; &nbsp; Practicing good 
self-care. You will love yourself more when you take better care of your basic needs. People high in self-love nourish themselves daily through healthy activities, 
like sound nutrition, exercise, proper sleep, intimacy, and healthy social interactions.</li><li>&nbsp; &nbsp; &nbsp; &nbsp; Making room for healthy habits. 
Start truly caring for yourself by mirroring that in what you eat, how you exercise, and what you spend time doing. Do stuff, not to “get it done” or because you 
“have to,” but because you care about yourself.</li></ul><p>&nbsp; &nbsp; &nbsp; &nbsp; Finally, to practice self-love, start by being kind, patient, gentle, and 
compassionate to yourself, the way you would with someone else that you care about.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Written by Jeffrey Borenstein, M.D., President 
&amp; CEO of the Brain &amp; Behavior Research Foundation. This blog post also appears on the Gravity Blankets Blog.</p>
        `,
        user_id: 4,
        img_url: "https://1sikgj46i2w02qt7g02ati3b-wpengine.netdna-ssl.com/wp-content/uploads/love-background-autism-spectrum.jpg",
      },
      {
        title: "What Is Revenge Bedtime Procrastination?",
        content: `
        <h3>&nbsp; &nbsp; &nbsp; &nbsp;What Is Revenge Bedtime Procrastination?</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; Revenge bedtime procrastination refers to a phenomenon 
        in which people put off going to bed to engage in activities that they do not have time for during the day.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; It is a way of finding 
        time for leisure and entertainment—at the expense of sleep.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; The term bedtime procrastination was introduced in a 2014 paper. 
        The addition of word revenge first came to use in China to describe how people often working 12-hour days would stay up as their only way to take back some control 
        of their time.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; The term became popular following a viral tweet by journalist Daphne K. Lee. She described it as something that 
        happens when “people who do not have much control over their daytime life refuse to sleep early to regain some sense of freedom during late night hours.”</p><h3>&nbsp; 
        &nbsp; &nbsp; &nbsp;Signs</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; Staying up late is not necessarily a sign of revenge bedtime procrastination. Researchers suggest that 
        three key features define sleep procrastination:</p><ul><li>&nbsp; &nbsp; &nbsp; &nbsp; The delay in going to sleep must decrease a person's overall sleep time per 
        night.</li><li>&nbsp; &nbsp; &nbsp; &nbsp; This delay in going to sleep is not due to any other reason, such as being sick of an environmental source interfering 
        with sleep.</li><li>&nbsp; &nbsp; &nbsp; &nbsp; People who engage in the behavior are fully aware that it may lead to negative consequences, but they choose to 
        engage in it anyways.</li><li>&nbsp; &nbsp; &nbsp; &nbsp; Some people might use these late-night and early-morning hours to catch up on hobbies or engage in more 
        energy-intensive activities. For most people, these activities tend to focus on things that do not require a great deal of effort.</li></ul><h3>&nbsp; &nbsp; &nbsp; 
        &nbsp;Who It Affects</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; Revenge bedtime procrastination is something that many people engage in from time to time. People who have 
        high-stress jobs, those who work long hours, and parents who have little time to themselves during the day are just a few of the people who frequently engage in this 
        behavior.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; It often starts small. You might stay up to play on your phone or catch up on your favorite shows. Soon 10 or 15 minutes 
        turns into an hour or two. In some cases, you might find yourself up well into the early hours of the morning doing inconsequential things before finally giving in 
        and going to sleep.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; One study found that women and students were more likely to engage in bedtime procrastination.</p><h3>&nbsp; 
        &nbsp; &nbsp; &nbsp;Causes</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; A general lack of free time during the day is the common culprit behind revenge bedtime procrastination, 
        but other factors also play a role.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; A 2014 study published in the journal Frontiers of Psychology suggested that revenge bedtime 
        procrastination was negatively correlated with self-regulation. While people who engage in this behavior want to sleep, their behaviors do not align with their 
        intentions.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; It is also possible that people who engage in bedtime procrastination are more prone to procrastination in general.
        </p><p>&nbsp; &nbsp; &nbsp; &nbsp; Your natural sleep patterns might also play a part. People who are naturally prone to being so-called "night owls" might have to 
        force themselves to wake up early.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Research also suggests that the behavior might result from an interaction between various factors, 
        including a person's natural sleep schedule and self-control resources.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Recent stress related to world effects, including the 2019 
        global pandemic, also appeared to worsen the behavior. Reports suggest that around 40% of adults experienced increased problems with sleep during 2020.</p><p>&nbsp; 
        &nbsp; &nbsp; &nbsp; As the line between work, home, and school became increasingly blurred, many people found that having time alone was hard to come by. Bedtime 
        procrastination became a way for many to squeeze in some precious alone time during the late-night hours</p>        
        `,
        user_id: 5,
        img_url: "https://static01.nyt.com/images/2022/08/05/well/05BURST-SLEEP-EXPERT_1/05BURST-SLEEP-EXPERT_1-blog480.jpg",
      },
      {
        title: "The Benefits of Yoga for Sleep",
        content: `
        <p>&nbsp; &nbsp; &nbsp; &nbsp; Yoga is an ancient practice that combines meditative movements, physical exercise, stretching, breathing, and attentiveness. 
It can have a wide range of health benefits, including better sleep. Because yoga can be relaxing and restorative, it is a great way to wind down from a 
busy day.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; If you are spending too many nights tossing and turning, incorporating yoga into your daily routine might be 
helpful. This ancient practice can be a valuable tool for combating stress, so it is often particularly useful if your nighttime insomnia is related to 
stress. Yoga is a healthy way to combat feelings of anxiety and worry.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; This article discusses some of the reasons why yoga 
can be beneficial for sleep, the best types of yoga to practice before you doze off, and poses to try. It also covers how to make bedtime yoga a regular 
habit.</p><h3>&nbsp; &nbsp; &nbsp; &nbsp;Why Yoga Is Good for Sleep</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; There are a number of reasons why yoga might help 
improve your sleep. Some of these include:</p><ul><li>Breath awareness: Breathing is an essential part of yoga, so regular yoga practice can help you become 
more aware of your breathing and how it affects your mind and body. Deep breathing, in particular, can help relax your body and improve your sleep.
</li><li>Mindfulness: Yoga may also be helpful because it is a mindful approach to physical activity. Mindfulness, which involves focusing attention 
and awareness on the present, has been shown to increase melatonin levels in the body, which can help improve sleep.</li><li>Physical activity: Numerous 
studies have shown that regular exercise can play a role in helping people sleep better. While you should generally avoid vigorous physical activity in 
the evening hours, light to moderate exercise such as gentle yoga won't interfere with sleep and can actually help you sleep better.</li></ul><h3>&nbsp; 
&nbsp; &nbsp; &nbsp;Best Types of Yoga for Sleep</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; There are many different types of yoga that you might try, but not 
all of them are right for helping you sleep better. Certain types of yoga can be more challenging and heart-pumping. For example, hot yoga or vinyasa are 
both forms of yoga that are of higher intensity. If better sleep is your goal, it is important to select an approach focused more on relaxation and 
stretching.</p><p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<strong>Here are the best types of yoga to do before sleep:</strong></p><ul><li>Restorative yoga: This 
restful practice invites the body to rest in poses held for upwards of 20 minutes each. The body is supported with the use of props such as blankets, 
blocks, and bolsters to ensure deep relaxation and diaphragmatic breathing.</li><li>Yoga nidra: Also known as yogic sleep, this form of yoga is done 
laying down and utilizes guided relaxation to withdraw from the senses and drop into a deep state of relaxation while still maintaining full consciousness.
</li><li>Hatha yoga: This type of yoga is centered on different body positions, known as asanas. It is usually practiced at a slower pace and utilizes deep 
breathing, stretching, and controlled movements.</li></ul>
        `,
        user_id: 5,
        img_url: "https://restonic.com/wp-content/uploads/2016/06/25-Matt-Walkers-Sleeping-with-Science-TED-Talks-series-post-1024x1024.jpg",
      },
      {
        title: "5 Self-Care Practices for Every Area of Your Life",
        content: `
        <p>&nbsp; &nbsp; &nbsp; &nbsp; All the stress relief activities in the world won't help if you aren't taking care of yourself. Meditation won't do you any good 
if you aren't getting adequate sleep. In fact, when you try to meditate, you might doze off because you aren't taking care of your body's need for sleep.</p><p>&nbsp; 
&nbsp; &nbsp; &nbsp; Similarly, hitting the gym once in a while won't relieve much stress if you're not regularly fueling your body with healthy, nutrient-dense 
food. You need to take care of your basic needs first if you want your stress relief activities to be effective.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; This article 
discusses some of the different types of self-care and why they are so important. It also covers some of the things that you can do to develop a self-care plan 
of your own.</p><h3>&nbsp; &nbsp; &nbsp; &nbsp;What Is Self-Care?</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; Self-care has been defined as "a multidimensional, multifaceted 
process of purposeful engagement in strategies that promote healthy functioning and enhance well-being."1 Essentially, the term describes a conscious act a person 
takes in order to promote their own physical, mental, and emotional health.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; There are many forms self-care can take. It could be 
ensuring you get enough sleep every night or stepping outside for a few minutes for some fresh air.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Self-care is vital for building 
resilience toward those stressors in life that you can't eliminate. When you've taken steps to care for your mind and body, you'll be better equipped to live your 
best life.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Unfortunately, however, many people view self-care as a luxury, rather than a priority. Consequently, they're left 
feeling overwhelmed, tired, and ill-equipped to handle life's inevitable challenges.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; It's important to assess how you're caring 
for yourself in several different domains so you can ensure you're caring for your mind, body, and spirit.</p><h3>&nbsp; &nbsp; &nbsp; &nbsp; Different Types of 
Self-Care</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; Self-care isn't just about finding ways to relax. It's about taking care of yourself mentally, physically, emotionally, 
socially, and spiritually. In order to care for your health and well-being, it is important to find a balance that allows you to address each of these areas. 
Sometimes you might need more self-care in one specific area in order to restore balance or find relief from a stressor in your life.</p><h4>&nbsp; &nbsp; &nbsp; 
&nbsp; 1. Physical Self-Care</h4><p>&nbsp; &nbsp; &nbsp; &nbsp; You need to take care of your body if you want it to run efficiently. Keep in mind that there's a 
strong connection between your body and your mind. When you're caring for your body, you'll think and feel better too.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Physical 
self-care includes how you're fueling your body, how much sleep you're getting, how much physical activity you are doing, and how well you're caring for your 
physical needs. Attending healthcare appointments, taking medication as prescribed, and managing your health are all part of good physical self-care.</p><h4>&nbsp; 
&nbsp; &nbsp; &nbsp; 2. Social Self-Care</h4><p>&nbsp; &nbsp; &nbsp; &nbsp; Socialization is key to self-care. But, often, it's hard to make time for friends and 
it's easy to neglect your relationships when life gets busy.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Close connections are important to your well-being. The best way to 
cultivate and maintain close relationships is to put time and energy into building your relationships with others.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; There isn't a 
certain number of hours you should devote to your friends or work on your relationships. Everyone has slightly different social needs. The key is to figure out 
what your social needs are and to build enough time in your schedule to create an optimal social life.</p><h4>&nbsp; &nbsp; &nbsp; &nbsp; 3. Mental Self-Care</h4><p>&nbsp; 
&nbsp; &nbsp; &nbsp; The way you think and the things that you're filling your mind with greatly influence your psychological well-being.</p><p>&nbsp; &nbsp; 
&nbsp; &nbsp; Mental self-care includes doing things that keep your mind sharp, like puzzles, or learning about a subject that fascinates you. You might find 
reading books or watching movies that inspire you to fuel your mind.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Mental self-care also involves doing things that help you 
stay mentally healthy. Practicing self-compassion and acceptance, for example, helps you maintain a healthier inner dialogue.</p><h4>&nbsp; &nbsp; &nbsp; &nbsp; 
4. Spiritual Self-Care</h4><p>&nbsp; &nbsp; &nbsp; &nbsp; Research shows that a lifestyle including religion or spirituality is generally a healthier lifestyle.</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; Nurturing your spirit, however, doesn't have to involve religion. It can involve anything that helps you develop a deeper sense of 
meaning, understanding, or connection with the universe.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Whether you enjoy meditation, attending a religious service, or praying, 
spiritual self-care is important.</p><h4>&nbsp; &nbsp; &nbsp; &nbsp; 5. Emotional Self-Care</h4><p>&nbsp; &nbsp; &nbsp; &nbsp; It's important to have healthy 
coping skills to deal with uncomfortable emotions, like anger, anxiety, and sadness. Emotional self-care may include activities that help you acknowledge and 
express your feelings regularly and safely.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Whether you talk to a partner or close friend about how you feel, or you set aside 
time for leisure activities that help you process your emotions, it's important to incorporate emotional self-care into your life.</p>
        `,
        user_id: 4,
        img_url: "https://cppvillage.com/wp-content/uploads/2020/01/selfcare.jpg",
      },
      {
        title: "What Are the Five Love Languages?",
        content: `
        <p>&nbsp; &nbsp; &nbsp; &nbsp; The five love languages describe five ways that people receive and express love in a relationship. Knowing your partner's love 
language and letting them know yours is a way to help you both feel loved and appreciated. Author and pastor Gary Chapman describes how to use these love 
languages to show your partner you care for them in a way that speaks to their heart.</p><h3>&nbsp; &nbsp; &nbsp; &nbsp;What Are the Five Love Languages?</h3>
<p>&nbsp; &nbsp; &nbsp; &nbsp; Chapman's book "The 5 Love Languages" was first published in 1992. Before writing the book, Chapman began to notice patterns in 
couples he was counseling. He realized that the couples were misunderstanding each other's needs.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; That led him to come up with 
five love languages, or ways that people in relationships express love. They are:</p><h3>&nbsp; &nbsp; &nbsp; &nbsp;Words of Affirmation</h3><p>&nbsp; &nbsp; 
&nbsp; &nbsp; "Words of affirmation" is about expressing affection through spoken words, praise, or appreciation. When this is someone's primary love language, 
they enjoy kind words and encouragement, uplifting quotes, love notes, and cute text messages. You can make this person's day by complimenting them or pointing 
out what they do well.</p><h3>&nbsp; &nbsp; &nbsp; &nbsp;Quality Time</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; Someone with this love language wants undivided attention. 
They feel loved if you are present and focused on them when you are together. This means putting down the cell phone, turning off the computer, making eye 
contact, and actively listening.</p><h3>&nbsp; &nbsp; &nbsp; &nbsp;Physical Touch</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; A person with physical touch as their 
primary love language feels love through physical affection. Aside from sex, they feel loved when their partner holds their hand, touches their arm, or gives 
them a massage at the end of the day, for example. This person's idea of a perfect date might include cuddling on the couch with a glass of wine and a good movie. 
They simply want to be close to their partner physically.</p><h3>&nbsp; &nbsp; &nbsp; &nbsp;Acts of Service</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; Acts of service 
are nice things you do for your partner that make them feel loved and appreciated, such as:</p><ul><li>Helping with the dishes</li><li>Running errands</li>
<li>Vacuuming</li><li>Putting gas in the car</li></ul><p>&nbsp; &nbsp; &nbsp; &nbsp; If your partner's main love language is acts of service, they'll notice 
and appreciate the little things you do for them. They tend to perform acts of service and kindness for others, too.</p><h3>&nbsp; &nbsp; &nbsp; &nbsp;
Receiving Gifts</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; For someone who uses and responds to this love language, gift-giving indicates love and affection. 
They treasure not only the gift itself but also the time and effort the gift-giver put into it.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; People who enjoy receiving 
gifts as part of their primary love language do not necessarily expect large or expensive presents; it's more the effort and thoughtfulness behind the gift 
that counts.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; When you take the time to pick out a gift specifically for them, it tells them you really know them. People with 
this love language can often remember every little gift they have received from their loved ones because it makes such an impact on them.</p>
        `,
        user_id: 3,
        img_url: "https://5lovelanguages.com/img/2735da70-8d49-4c07-9867-7e5d2ba69c79/og_quizzes_lovelanguage.jpg",
      },
      {
        title: "When Is the Best Time to Meditate?",
        content: `
        <p>&nbsp; &nbsp; &nbsp; &nbsp; Meditation is a practice that can help you relax and cope better with stress. It can also have a wide range of other health 
benefits. Even if you've enjoyed the practice in the past, finding the time to incorporate regular meditation into your life isn't always easy.</p><p>&nbsp; 
&nbsp; &nbsp; &nbsp; Does when you meditate have an impact on the benefits or effects it has on your mind, body, and well-being? For many people, morning 
can be the best time to meditate. But even if you can't work meditation into your morning routine, it can benefit your mind and health at any time of day.
</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Here's what you should know about when to meditate, why it is important to find the time to meditate, and some tips that 
can help make meditation a regular habit.</p><h3>&nbsp; &nbsp; &nbsp; &nbsp;When to Meditate</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; So when is the best time to 
meditate? While it's essential to choose a time that works best for your schedule, there may be certain times that can help you maximize the benefits of 
meditation.</p><h4>&nbsp; &nbsp; &nbsp; &nbsp; In the Morning</h4><p>&nbsp; &nbsp; &nbsp; &nbsp; Meditation first thing in the morning can be an excellent 
opportunity to set the tone for the day. During these early morning hours, when work, family, and other commitments haven't yet started vying for your time 
and attention, you often have the focus and clarity to focus fully on meditating.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; How long you meditate is up to you and 
may depend on your goals and preferences, but even a quick five-minute meditation can provide a healthy start to your day.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; 
Research suggests that a brief, daily meditation can produce many positive effects, including enhanced memory, attention, and emotional regulation.</p><p>&nbsp; 
&nbsp; &nbsp; &nbsp; Setting your intention for the day with meditation can also help you maintain a positive and relaxed attitude that can help you better 
manage any stresses that might arise during the day.</p><h4>&nbsp; &nbsp; &nbsp; &nbsp; During Your Lunch Break</h4><p>&nbsp; &nbsp; &nbsp; &nbsp; If you 
have difficulty making time for meditation in the morning, consider doing it over your lunch break instead. This can be a great way to take a much-needed 
break from work and recharge for the afternoon ahead.</p><h4>&nbsp; &nbsp; &nbsp; &nbsp; How to Meditate at Work</h4><p>&nbsp; &nbsp; &nbsp; &nbsp; Find 
a quiet place to meditate to make the most of your lunchtime meditation. If you're at work, this may mean stepping away from your desk or cubicle to find 
a nearby conference room or empty office. If you're working from home, try sitting on your porch or in the backyard.</p><h4>&nbsp; &nbsp; &nbsp; &nbsp; 
In the Evening</h4><p>&nbsp; &nbsp; &nbsp; &nbsp; Ending your day with meditation can help you wind down and prepare for a good night's sleep. This can 
be especially helpful if you have trouble sleeping or are ruminating on the day's events before bed.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; If you typically 
have trouble sleeping, try meditating for 10 to 20 minutes before bed. You may also want to focus on breathing exercises or listen to a guided meditation 
designed to help you relax and fall asleep.</p><h4>&nbsp; &nbsp; &nbsp; &nbsp; After You Get Home From Work</h4><p>&nbsp; &nbsp; &nbsp; &nbsp; For many 
people, the time immediately after work is when they're most likely to feel stressed. This can make it difficult to relax and may lead to unhealthy coping 
mechanisms like overeating or drinking alcohol.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Meditation can help you decompress and transition from "work mode" to 
"home mode" in a healthy way.</p><h4>&nbsp; &nbsp; &nbsp; &nbsp; After a Workout</h4><p>&nbsp; &nbsp; &nbsp; &nbsp; Meditation can also be a great way to 
cool down after a workout. If you feel revved up or stressed out after hitting the gym, yoga studio, or running trail, take a few minutes to sit quietly 
and focus on your breath. This can help center your mind and ease any post-workout tension you may be feeling.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Try 
meditating in the same place you worked out to make the most of your post-workout meditation. This can help anchor the relaxation response during meditation 
to the space where you exercise, which can help you cool down following a workout.</p><h4>&nbsp; &nbsp; &nbsp; &nbsp; When You Need to Relax</h4><p>&nbsp; 
&nbsp; &nbsp; &nbsp; In addition to these specific times of day, it's important to be flexible and meditate whenever you need it most. If you're feeling 
stressed or anxious, take a few minutes to step away from whatever is causing your discomfort and practice some mindfulness.</p><p>&nbsp; &nbsp; &nbsp; 
&nbsp; When choosing when to meditate, always prioritize your mental health. If you're feeling overwhelmed, anxious, or down, take a break to focus on 
your breath and be present in the moment.&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; While there are many ideal times for meditation, the best time to meditate 
is whenever you can fit it into your schedule. Always prioritize your mental health and meditate whenever you need it most.</p><h4>&nbsp; &nbsp; &nbsp; &nbsp; 
Whenever You Can</h4><p>&nbsp; &nbsp; &nbsp; &nbsp; The best time to meditate is when you can fit it into your schedule. While there may be certain times 
that are ideal for meditation, the important thing is to find a time that works for you and make it a regular habit.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; It 
takes time and consistent effort to build a new habit.2 You can make it easier by picking a time that helps you stick with it. If you know meditating in 
the morning will be difficult, pick another time of day, whether during your lunch or in the evening when you're winding down from the day. The longer you 
stick with it, the more likely it is to become a lasting habit.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; If you have trouble meditating at home, try listening to 
a guided meditation during your commute or while you're out for a walk. You can also download meditation apps that provide short, 10-minute meditations you 
can do anywhere, anytime.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; A 2022 study comparing the impact of morning vs. evening meditation found that meditation that 
occurred at either time decreased anxiety and increased mindfulness. The study's authors concluded that meditation could improve mental well-being whether 
it was done in the morning or evening.</p>
        `,
        user_id: 2,
        img_url: "https://i0.wp.com/s3.amazonaws.com/heights-photos/wp-content/uploads/2021/04/22211238/meditating-.png",
      },
      {
        title: "How Does Social Media Play a Role in Depression?",
        content: `
        <p>&nbsp; &nbsp; &nbsp; &nbsp; By some estimates, roughly 4 billion1 people across the world use networking websites such as Facebook, Twitter, and 
Instagram. This usage has prompted mental health experts to investigate whether the enormous popularity of social media plays a role in depression.
</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Research suggests that people who limit their time on social media tend to be happier than those who do not. Studies 
also indicate that social media may trigger an array of negative emotions in users that contribute to or worsen their depression symptoms.</p><h3>
&nbsp; &nbsp; &nbsp; &nbsp;Defining Depression</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; Clinical depression or major depressive disorder is a mood disorder 
characterized by ongoing feelings of sadness and loss of interest in activities that an individual once enjoyed. Depression can be mild or severe and 
make it difficult for those with the condition to concentrate, sleep or eat well, make decisions, or complete their normal routines.</p><p>&nbsp; 
&nbsp; &nbsp; &nbsp; People with depression may contemplate death or suicide, feel worthless, develop anxiety or have physical symptoms such as 
fatigue or headaches. Psychotherapy and medication are some of the treatments for depression. Limiting time on social media and prioritizing real-world 
connections can be beneficial to mental health.</p><h3>&nbsp; &nbsp; &nbsp; &nbsp;Causation or Correlation?</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; Some 
studies about social media and mental health reveal that there is a correlation between networking sites and depression. Other research goes a step 
further, finding that social media may very well cause depression. A landmark study—“No More FOMO: Limiting Social Media Decreases Loneliness and 
Depression”—was published in the Journal of Social and Clinical Psychology in 2018.3</p><p>&nbsp; &nbsp; &nbsp; &nbsp; The study found that the fewer 
people used social media, the less depressed and lonely they felt.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; This indicates a relationship between lower social 
media use and emotional wellbeing. According to the researchers, the study marked the first time scientific research established a causal link between 
these variables.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; “Prior to this, all we could say was that there is an association between using social media and having 
poor outcomes with wellbeing,” said study coauthor Jordyn Young in a statement.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; To establish the link between social
 media and depression, the researchers assigned 143 University of Pennsylvania students to two groups: one could use social media with no restrictions, 
while the second group had their social media access limited to just 30 minutes on Facebook, Instagram, and Snapchat combined over a three-week period.
</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Each study participant used iPhones to access social media and the researchers monitored their phone data to ensure 
compliance. The group with restricted social media access reported lower severity of depression and loneliness than they had at the beginning of the 
study.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Both groups reported a drop in anxiety and fear of missing out (FOMO), apparently because joining the study 
made even the group with unrestricted access to social media more cognizant of how much time they were spending on it.</p><h3>&nbsp; &nbsp; &nbsp; 
&nbsp;Less Social Media, Less FOMO</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; It is not certain why participants who only spent 30 minutes daily on social 
media experienced less depression, but researchers suggest that these young people were spared from looking at content—such as a friend's beach vacation, 
grad school acceptance letter, or happy family—that might make them feel bad about themselves.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Taking in the photos or 
posts of people with seemingly “perfect” lives can make social media users feel like they just do not measure up. A 2015 University of Missouri study 
found that regular Facebook users were more likely to develop depression if they felt feelings of envy on the networking site.</p><p>&nbsp; &nbsp; 
&nbsp; &nbsp; Social media can also give users a case of FOMO, for example, if they were invited on their friend's beach vacation but could not go 
for some reason. Or if the friend did not ask them on the trip at all, users might feel hurt and left out to see that others in their social circle 
were. It can lead them to question their friendships or their own self-worth.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Social media users who visit an 
ex-social media page and see pictures of their former partner wining and dining with a new love interest can also experience FOMO. They might wonder 
why their ex never took them to such fancy restaurants or lavished them with gifts.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Ultimately, limiting one's 
time on social media can mean less time spent comparing oneself to others. This can extend to not thinking badly of oneself and developing the 
symptoms that contribute to depression.</p>
        `,
        user_id: 1,
        img_url: "https://www.massagefremantle.com.au/img/anxiety-and-depression.jpg",
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {})
  }
};
