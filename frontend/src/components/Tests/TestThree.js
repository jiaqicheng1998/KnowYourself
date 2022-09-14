import React, { useState } from 'react';
import { addResultThunk } from '../../store/result';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Tests.css'

const TestThree = ({ isLoaded }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [option, setOption] = useState("")
    const options = [
        'A. Sheep',
        'B. Rabbit',
        'C. Horse',
        'D. Bird'
    ]
    const sessionUser = useSelector(state => state.session.user);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isLoaded && !sessionUser) {
            return history.push('/signup')
        }

        let result;
        if (parseInt(option) === 0) {
            result = 'You want your partner to understand you even before you say the word. You want your partner know want you need just by your body languages or a sight. You belive that true connection will be formed without saying a word. But do remember, communication is the key at sometimes!'
        }
        if (parseInt(option) === 1) {
            result = 'You tend to seek a deep level of connection between you and your partner. You do not want any secrets between the two of you. You want to talk about anything with your partner, and you are expecting he/she feels the same. But do remember, a little bit of privacy is needed for everyone.'
        }
        if (parseInt(option) === 2) {
            result = 'Not only right now. You want both of you can grow as a person in the future. You enjoying in achieving a better version of yourself everyday and you want your partner become the support. At the same time, you would love to do the same for your partner. But do remember, rest is for a better restart.'
        }
        if (parseInt(option) === 3) {
            result = 'You want your partner give you warmth and support no matter when. You want a person who can makes you heart pump even you know him/her for a very long time. But do remember, we are all normal people. Everybody will have a bad day at some point in their lives. Will you keep your commitment to your partner, eventhough they are not as shine as you first met him/her?'
        }

        const newResult = {
            title: 'What Is Your Ideal Relationship?',
            result: result
        }

        const returnResult = await dispatch(addResultThunk(newResult));
        if (returnResult) {
            history.push(`/results/${returnResult.id}`)
        }
    }

    return (
        <div className='ind-test'>
            <h1>What Is Your Ideal Relationship?</h1>
            <p>What kind of relationship you want to build with your loved one? let us take a psychology test of your projection of ideal relationship.
            Let us see, in your deep heart, what kind of connection you really need.</p>
            <p>One day, you suddenly meet an animal that can speak human languages? Which one of the four animal do you want it to be?</p>
            <p>Find the option you want the most!</p>
            <div className='test-img' style={{ backgroundImage: `url('https://img.freepik.com/free-vector/love-concept-flat-design-illustration_23-2149008642.jpg')` }}></div>
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

export default TestThree;