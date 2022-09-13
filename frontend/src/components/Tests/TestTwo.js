import React, { useState } from 'react';
import { addResultThunk } from '../../store/result';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Tests.css'

const TestTwo = ({ isLoaded }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [option, setOption] = useState("")
    const options = [
        'A. An old man who seems kind and friendly',
        'B. A little kid who is playing in front your house',
        'C. A businessman who is selling goods in the market',
        'D. A girl who is singing and washing clothes near the river'
    ]
    const sessionUser = useSelector(state => state.session.user);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isLoaded && !sessionUser) {
            return history.push('/signup')
        }

        let result;
        if (parseInt(option) === 0) {
            result = 'You are not very demandful in terms of making friends. You rarely have the idea that, I have to be friend with certain types of people. Your will not intentionaly flatter some rich friends if they have a completely different lifestyle than you. In terms of making friends, you go with your flow. '
        }
        if (parseInt(option) === 1) {
            result = 'You are an unsociable person. You do not care that much about making friends. In the crowd, you are a lone wolf. You will not interfere with others lives, and you do not want other people lay hands in your own business. You have very few friends.'
        }
        if (parseInt(option) === 2) {
            result = 'You do not value that much in deep connections with your friends. You believe that the more the better. You are a social butterfly. No matter where you go, you will have friends who want to help and support you. You think that different kinds of friends will expand your vision and gain more opportunities in your life.'
        }
        if (parseInt(option) === 3) {
            result = 'Your principle of making friends is quality over quantity. You have your gut feeling of making friend. If you admire this person, you will find your way to make connection and become good friends. If you do not like this person at your first sight, you will not pay any attention towards him/her.'
        }

        const newResult = {
            title: 'Reveal Your Friend-making Philosophy',
            result: result
        }

        const returnResult = await dispatch(addResultThunk(newResult));
        if (returnResult) {
            history.push(`/results/${returnResult.id}`)
        }
    }

    return (
        <div className='ind-test'>
            <h1>Reveal Your Friend-making Philosophy</h1>
            <p>This is a fun little psychology test which can reveal your personality in making friends! It only takes 2 minutes! Enjoy!</p>
            <p>One day, you are lost in a huge mountain. Suddenly, there is a rabbit appeared in front of you.
                You follow the rabbit for a while. The rabbit brings you to a wonderland that is peaceful and amazing.
                In this wonderland, what do you want to see the most?</p>
            <p>Find the option you want to see the most!</p>
            <img src='https://newenglandwithlove.com/wp-content/uploads/2020/12/shutterstock_686650819.jpg' alt="the wonderland" />
            <form className='test-form' onSubmit={handleSubmit}>
                <div className='test-options-text'>
                    {options.map((option, idx) => (
                        <label className="ind-option-text" key={idx}>
                            <input
                                type="radio"
                                value={idx}
                                onChange={(e) => setOption(e.target.value)}
                                name="optionGroup"
                            />
                            {option}
                        </label>
                    ))}
                </div>
                <button className="check-button" type='submit'>Check Your Result!</button>
            </form>
        </div>
    )
}

export default TestTwo;