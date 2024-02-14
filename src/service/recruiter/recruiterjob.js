import { takeEvery, call, put } from 'redux-saga/effects'; // Import put from redux-saga/effects

import {
    createjobFail,
    createjobSuc,
    createjobRequest,
    getjobRequest,
    SucgetjobRequest,
    FailgetjobRequest
} from 'slice/recruiter/createjobslice';

import authFetch from "service/authfetch";
import authFetchGet from "service/authFetchGet";

// Define createjobData function
export const createjobData = (data) => {
    return authFetch("/api/jobs", 'Post', data)
}

// Define getJobData function
export const getJobData = (pageId) => {
    return authFetchGet(`/api/jobs/myjobs?${pageId}`, 'GET')
}

function* createjob(action) {
    try {
        const mydata = yield call(createjobData, action.payload);
        yield put(createjobSuc(mydata)); // Use put to dispatch success action
    } catch (error) { // Catch the error and yield failure action with error payload
        yield put(createjobFail(error));
    }
}

function* getjob(action) {
    try {
        const mydata = yield call(getJobData, action.payload);
        yield put(SucgetjobRequest(mydata)); // Use put to dispatch success action
    } catch (error) { // Catch the error and yield failure action with error payload
        yield put(FailgetjobRequest(error));
    }
}

export function* watchcreatejob() {
    yield takeEvery(createjobRequest, createjob); // Remove unnecessary return
}

export function* watchgetjob() {
    yield takeEvery(getjobRequest, getjob); // Remove unnecessary return
}
