import React, { useState } from 'react';
import test1Image from './TestOne.jpg';
import { addResultThunk } from '../../store/result';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Tests.css'

const TestOne = ({ isLoaded }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [option, setOption] = useState(0)
    const options = Array.from({ length: 21 }, (_, index) => index + 1);
    const sessionUser = useSelector(state => state.session.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoaded && !sessionUser) {
            return history.push('/signup')
        }

        let result;
        if ([1, 3, 6, 7].includes(parseInt(option))) {
            result = `Positive and enthusiastic are your strength! You will not be easily defeated by any obstacles. You firmly believed that "What does not kill you will make you stronger". As long as you keep your positivity, you and overcome anything. You are every likely to be successful`
        }
        if ([2, 11, 12, 18, 19].includes(parseInt(option))) {
            result = `Your are popular among your friends. Your are very special to your friends. When they are happy, you would love to share their joy. When they are facing difficulties, you are the first one to offer help. Your kindness makes people love you.`
        }
        if (option == 4) {
            result = 'You go with the flow. You prefer happiness and comfort in your mind rather than abundance in material world. You are not very revolutional. You do not like it when your peaceful day-to-day life are interrupted. Same mindset applies to your way of chasing your dream.'
        }
        if (option == 5) {
            result = 'You are often weary and feel weak, and you have little energy for life. There are very little things can attract you in life. You tend to keep your sorrow and annoyance in your mind. Your do not like to talk to others about it or find other ways to release the stress.'
        }
        if (option == 9) {
            result = 'You are a merry and fun-loving person. You are a vibe-maker in your community. You do not care that much about details, and you are a candid person. You enjoy hanging out with others in a rather easier way. You are full of curiosity. Once you find your interest, you will make something out of it.'
        }
        if ([13, 21].includes(parseInt(option))) {
            result = 'You have got the tendency to keep to yourself, you are also frequently anxious and would normally avoid other people. However, you will wear your friendly social mask on. It is very hard to walk in your heart. Aviodance is a usual move for you. You cover yourself too well. You do not want to share secrets with others and you are not good at communication.'
        }
        if (option == 8) {
            result = `You are a real daydreamer — you like being in your own world and away from this one. You are kind and naive. You have high self-esteem and you are proud of yourself. You go with your own inituition. You would like to fantasize, and do not care the judgements from outside world. If you insist on something, it is hard to talk you out of it.`
        }
        if (option == 10 || option == 15) {
            result = 'You are a well-adapted person, content with the life you have. You refuse to be vulgar and advocate noble. You have your own standards to the quality of your life. You are innocent. You do not want to be aggressive or competitive most of the time. However, when you feel like you deserve to have it, you will put in all your efforts.'
        }
        if (option == 14) {
            result = 'You are emotionally drained or exhausted. There is a good chance you are facing inner emotional crisis or turmoil. No matter in relationships or life, you hope for a turnover in the outside enviornment. However, you resist to make any changes on yourself.'
        }
        if (option == 20) {
            result = 'You have heightened sense of self-importance. You are a born leader, and you want to be the only one people listen to. However, you will hurt the feelings of people who really care about you sometime because of your pride and ignorance.'
        }
        if (option == 16) {
            result = "You are likely to lean on other people. When facing obstacles, you always wish to get help and support from your surroundings. You looks like you are careless, but in reality, you are very sensitive. You need to find your own strength and try to be independent."
        }
        if (option == 17) {
            result = "You have a strong sense of responsiblity. You are a trustworthy person. Your friend will definitely feel better after your consolation. However, you feel lonely inside and you are afraid of it. You want people's attention at all time."
        }
        
        const newResult = {
            title: "The 'Blob Tree' Test",
            result: result
        }

        const returnResult = await dispatch(addResultThunk(newResult));
        if (returnResult) {
            history.push(`/results/${returnResult.id}`)
        }
    }
    return (
        <div className='ind-test'>
            <h1>The 'Blob Tree' Test</h1>
            <p>This is the famous Blob Tree test created by behavioural psychologist Pip Wilson,
                who is a psycho-educational gamester and EQ developer. This test helps us to recognize
                and strengthen emotions, and to some extent, understand our social status in society too.
                Each blob figure in this picture is in a different mood and has a different position on
                the tree.</p>
            <p>Find the blob-figure that resembles you the most.</p>
            <img src={test1Image} alt="test 1 image" />
            <form className="test-form" onSubmit={handleSubmit}>
                <div className='test-options'>
                    {options.map(option => {
                        return (
                            <label className="ind-option" key={option}>
                                <input
                                    type="radio"
                                    value={option}
                                    onChange={(e) => setOption(e.target.value)}
                                    name="optionGroup"
                                />
                                {option}
                            </label>
                        )
                    })}
                </div>
                <button className="check-button" type='submit'>Check Your Result!</button>
            </form>
        </div>
    )

}

export default TestOne;