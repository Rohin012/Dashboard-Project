import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getjobRequest } from 'slice/recruiter/createjobslice';

export default function ListJob() {

    const data = useSelector(y => y.jobs)

    console.log(data);
    const dis = useDispatch();

    useEffect(() => {
        dis(getjobRequest(1))
    }, [])

    return (
        <div>ListJob</div>
    )
}

