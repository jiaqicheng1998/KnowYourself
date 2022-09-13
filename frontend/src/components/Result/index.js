import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadResultsThunk } from '../../store/result';
import { useParams } from 'react-router-dom';
import './Result.css'

const Result = () => {
    const resultId = useParams().id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadResultsThunk());
    }, [])
    const results = useSelector(state => state.result.entries);
    const result = results[resultId]

    return (
        <div className='result-page'>
            <h1>Your Result for {result?.title}</h1>
            <p>Tested at: {result?.createdAt.slice(0,10)}</p>
            <p>{result?.result}</p>
            <div className="result-pic" style={{ backgroundImage: `url("https://www.mdanderson.org/images/publications/cancerwise/M/Access_MyChart.jpg")` }}></div>
        </div>
    )
}

export default Result;