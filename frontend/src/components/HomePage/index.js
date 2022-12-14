import React, { useEffect, useState } from "react";
import banner from './banner.png';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticlesThunk } from "../../store/article";
import { NavLink } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadArticlesThunk());
    }, [dispatch])
    const articles = useSelector(state => state.article.entries);
    const [showArticle, setShowArticle] = useState(true)
    const [showTest, setShowTest] = useState(false)
    const tests = {
        1: { id: 1, title: "The 'Blob Tree' Test", content: `It’s been years ago since I took this psych test. And it has never seized to intrigue me each time I re-take it.
        This is the famous Blob Tree test created by behavioural psychologist Pip Wilson, who is a psycho-educational gamester and EQ developer. This test helps us to recognize and strengthen emotions, and to some extent, understand our social status in society too. Each blob figure in this picture is in a different mood and has a different position on the tree.`, img_url: "https://themindsjournal.com/wp-content/uploads/2017/12/blob.jpg" },
        2: { id: 2, title: "Reveal Your Friend-making Philosophy", content: `This is a fun little psychology test which can reveal your personality! It only takes 2 minutes! Enjoy!
        What is your first priciple of making friends? Friends sometime can play a big part of our lives. What you really want in making friends? Take this test and figure it out!`, 
        img_url: "https://newenglandwithlove.com/wp-content/uploads/2020/12/shutterstock_686650819.jpg" },
        3: {
            id: 3,
            title: "What Is Your Ideal Relationship?",
            content: "What kind of relationship you want to build with your loved one? let us take a psychology test of your projection of ideal relationship.Let us see, in your deep heart, what kind of connection you really need.",
            img_url: "https://img.freepik.com/free-vector/love-concept-flat-design-illustration_23-2149008642.jpg"
        },
        4: {
            id: 4,
            title: 'Will You Cheat On Your Partner?',
            content: `A commitment of ones entire lifetime can be difficult to some people. Around 30% to 40% of Americans cheat on their partners. 
            However, Less than 3% of American adults believe it is not wrong to engage in extramarital sex.
            Why would you still cheat eventhough you beleive it is wrong? What personality traits of you can make you cheat or not cheat?`,
            img_url: 'https://thumbs.dreamstime.com/b/broken-heart-man-sad-holding-shape-concept-being-48762539.jpg'
        }
    }

    const showArticleButton = () => {
        setShowArticle(true)
        setShowTest(false)
    }

    const showTestButton = () => {
        setShowArticle(false)
        setShowTest(true)
    }

    const getContent = (str) => {
        let arr = str.split(' &nbsp;')
        return arr.filter(a => a.length > 300)[0]
    }

    return (
        <div className="homepage">
            <div className="banner" style={{ backgroundImage: `url(${banner})` }}></div>
            <div className="selection-bar">
                <div className={showArticle ? "curr-selected" : "non-select"} onClick={showArticleButton}>Articles</div>
                <div className={showTest ? "curr-selected" : "non-select"} onClick={showTestButton}>Tests</div>
            </div>
            <div className="articles-container">
                {showArticle && Object.values(articles).map((article) => (
                    <NavLink to={`/articles/${article.id}`} key={article.id}>
                        <div className="ind-article-card">
                            <div className="ind-article-card-left">
                                <p className="title">{article?.title}</p>
                                <div className="name-and-profile">
                                    <div className="user-icon" style={{ backgroundImage: `url(${article?.User.profile_pic})` }}></div>
                                    <p>{article?.User.username}</p>
                                </div>
                                <p>{getContent(article?.content)?.slice(0, 260)}...</p>
                            </div>
                            <div className="img-left" style={{ backgroundImage: `url(${article.img_url})` }}></div>
                        </div>
                    </NavLink>
                ))}
                {showTest && Object.values(tests).map((test) => (
                    <NavLink to={`/tests/${test.id}`} key={test.id}>
                        <div className="ind-article-card">
                            <div className="ind-article-card-left">
                                <p className="title">{test.title}</p>
                                <div className="name-and-profile">
                                    <div className="user-icon" style={{ backgroundImage: `url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/majo013-1626936419.jpg")` }}></div>
                                    <p>Know Yourself</p>
                                </div>
                                <p>{test.content.slice(0, 260)}...</p>
                            </div>
                            <div className="img-left" style={{ backgroundImage: `url(${test.img_url})` }}></div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default HomePage;