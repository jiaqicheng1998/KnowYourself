import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadResultsThunk } from '../../store/result';
import { useParams } from 'react-router-dom';

const Result = () => {
    const resultId = useParams().id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadResultsThunk());
    }, [])
    const results = useSelector(state => state.result.entries);
    const result = results[resultId]

    return (
        <div>
            <h1>Your Result for {result?.title}</h1>
            <p>{result?.result}</p>
        </div>
    )
}

export default Result;