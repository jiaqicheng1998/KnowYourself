import React, { useState } from 'react';
import { addResultThunk } from '../../store/result';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Tests.css'

const TestFour = ({ isLoaded }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [option, setOption] = useState("")
    const options = [
        'A. Washing the dishes',
        'B. Mopping the floor',
        'C. Cooking meals',
        'D. Taking out trash'
    ]
    const sessionUser = useSelector(state => state.session.user);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isLoaded && !sessionUser) {
            return history.push('/signup')
        }

        let result;
        if (parseInt(option) === 0) {
            result = 'Sometimes you have the intention to cheat. However you will hold yourself before you really doing anything irreparable. There are 2 characteristics of washing dishes. First, dishes are considered dirty. It means that you do not resist dirtiness in your mind. Second, you need to wash your hand after washing dishes. It means that if you cannot clean up the mess afterwards, you will not start at the first place.'
        }
        if (parseInt(option) === 1) {
            result = 'Your moral sense and responsibility will hold you back. The characteristic of mopping floor is that, it sets up its boundaries. Because you only mop the floor of your own house, and you need to pay attention to the edges. It shows that you are the kind of the person who has a bottom line of behaviors. Even though sometime you will might have feelings for someone other than your partner, you will tell yourself that it crosses the line.'
        }
        if (parseInt(option) === 2) {
            result = 'You will be very loyal to your partner. You are very responsible, and you will be a good husband/wife. There are two characteristics of cooking. First, it requires you to stay at home for a long time. Second, you cook mainly for your family members rather than yourself. With these two traits, it shows that you are a person who devotes to your family. Without a doubt, you will be a good partner.'
        }
        if (parseInt(option) === 3) {
            result = 'You are the type which is most likely to cheat on your partner among the four options. There are two characteristics of taking out trash. First, it requires you to leave the house and go to the outside world. That means you get bored easily with similar and routine life. Second, you do not mind the trash will make your hand dirty. That means you tend not to worry about the mess after cheating on your partner. You have the gut to do it.'
        }

        const newResult = {
            title: 'Will You Cheat On Your Partner?',
            result: result
        }

        const returnResult = await dispatch(addResultThunk(newResult));
        if (returnResult) {
            history.push(`/results/${returnResult.id}`)
        }
    }

    return (
        <div className='ind-test'>
            <h1>Will You Cheat On Your Partner?</h1>
            <p>A commitment of ones entire lifetime can be difficult to some people. Around 30% to 40% of Americans cheat on their partners. 
                However, Less than 3% of American adults believe it is not wrong to engage in extramarital sex.
                Why would you still cheat eventhough you beleive it is wrong? What personality traits of you can make you cheat or not cheat?</p>
            <p>If you only had to do one housework in your life, which one would you choose?</p>
            <p>Find the option you want the most!</p>
            <div className='test-img' style={{ backgroundImage: `url('https://thumbs.dreamstime.com/z/surprised-husband-coming-home-looking-to-wife-kissing-another-man-vector-flat-illustration-adultery-cheating-spouse-family-171419604.jpg')` }}></div>
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

export default TestFour;