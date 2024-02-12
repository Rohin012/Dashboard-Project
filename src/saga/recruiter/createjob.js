import { takeEvery, call } from 'redux-saga/effects';

import {
    createjobFail,
    createjobSuc,
    createjobRequest,
    getjobRequest,
    SucgetjobRequest,
    failgetJobRequest
} from 'slice/recruiter/createjobslice';

import { createjobData, getJobData } from 'service/recruiter/recruiterjob';

function createjob(action) {
    try {
        let mydata = call(createjobData, action.payload)
        yield createjobSuc(mydata)
    }
    catch {
        yield createjobFail(mydata)

    }
}



export function watchcreatejob() {
    return yield takeEvery(createjobRequest, createjob)
}

function getjob(action) {
    try {
        let mydata = yield call(getJobData, action.payload);

        yield SucgetjobRequest(mydata);
    } catch {
        yield failgetJobRequest(mydata);
    }
}

export function watchgetjob() {
    return yield takeEvery(getjobRequest, getjob);
} 