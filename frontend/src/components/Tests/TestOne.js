import React, { useState } from 'react';
import test1Image from './TestOne.jpg';

const TestOne = () => {
    const [option, setOption] = useState(0)
    const options = Array.from({ length: 21 }, (_, index) => index + 1);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(option)
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
            result = 'you are often weary and feel weak, and you have little energy for life.'
        }
        if (option == 9) {
            result = 'you are a merry and fun-loving person.'
        }
        if ([13, 21].includes(parseInt(option))) {
            result = 'you have got the tendency to keep to yourself, you are also frequently anxious and would normally avoid other people.'
        }
        if (option == 8) {
            result = `you are a real daydreamer — you like being in your own world and away from this one.`
        }
        if (option == 10 || option == 15) {
            result = 'you are a well-adapted person, content with the life you have.'
        }
        if (option == 14) {
            result = 'you are emotionally drained or exhausted. There is a good chance you are facing inner emotional crisis or turmoil.'
        }
        if (option == 20) {
            result = 'You have heightened sense of self-importance. You are a born leader, and you want to be the only one people listen to.'
        }
        if (option == 16) {
            result = "You are likely to lean on other people. When facing obstacles, you always wish to get help and support from your surroundings. You looks like you are careless, but in reality, you are very sensitive."
        }
        if (option == 17) {
            result = "You have a strong sense of responsiblity. You are a trustworthy person. Your friend will definitely feel better after your consolation. However, you feel lonely inside and you are afraid of it. You want people's attention at all time."
        }
        console.log(result)
    }
    return (
        <div>
            <h1>The 'Blob Tree' Test</h1>
            <p>This is the famous Blob Tree test created by behavioural psychologist Pip Wilson,
                who is a psycho-educational gamester and EQ developer. This test helps us to recognize
                and strengthen emotions, and to some extent, understand our social status in society too.
                Each blob figure in this picture is in a different mood and has a different position on
                the tree.</p>
            <p>Find the blob-figure that resembles you the most.</p>
            <img src={test1Image} alt="test 1 image" />
            <form onSubmit={handleSubmit}>
                <div>
                    {options.map(option => {
                        return (
                            <label key={option}>
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
                <button type='submit'>Check Your Result!</button>
            </form>
        </div>
    )

}

export default TestOne;