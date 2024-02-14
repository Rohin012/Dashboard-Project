import { Container, Card, Button, Box } from '@mui/material';
import { Breadcrumb } from 'app/components';

import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getjobRequest } from 'slice/recruiter/createjobslice';

export default function ListJob() {

    const { data, isLoading, error, listdata } = useSelector((y) => y.jobs)

    console.log(listdata);
    const dis = useDispatch();

    useEffect(() => {
        dis(getjobRequest(1))
    }, [])

    return (
        <>
            <Container>
                <div>
                    <Box className="breadcrumb">
                        <Breadcrumb routeSegments={[{ name: 'ListJob', path: '/Recruiter' }, { name: 'ListJob' }]} />
                    </Box>

                    {isLoading && <div>Loading</div>}
                    {error && <div>{error.message}</div>}

                    {data && (
                        <ul className='col-sm-4'>
                            {
                                listdata?.map((v) => {
                                    return (
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>{v.title}</Card.Title>
                                                <Card.Title>{v.skillsets}</Card.Title>
                                                <Card.Title>{v.userId}</Card.Title>
                                                <Card.Title>{v.jobType}</Card.Title>
                                                <Card.Title>{v.salary}</Card.Title>
                                                <Button variant='primary'>Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    )


                                })
                            }
                        </ul>



                    )}
                </div>
            </Container>
        </>
    )
}

