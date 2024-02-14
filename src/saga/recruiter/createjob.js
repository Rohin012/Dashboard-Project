import { takeEvery, call, put } from 'redux-saga/effects';
import { createjobFail, createjobSuc, createjobRequest, getjobRequest, SucgetjobRequest, FailgetjobRequest } from 'slice/recruiter/createjobslice';
import { createjobData, getJobData } from 'service/recruiter/recruiterjob';

function* createjob(action) {
    try {
        const mydata = yield call(createjobData, action.payload);
        yield put(createjobSuc(mydata)); // Assuming createjobSuc is an action creator
    } catch (error) {
        yield put(createjobFail(error));
    }
}

export function* watchcreatejob() {
    yield takeEvery(createjobRequest, createjob);
}

function* getjob(action) {
    try {
        const mydata = yield call(getJobData, action.payload);
        yield put(SucgetjobRequest(mydata)); // Assuming SucgetjobRequest is an action creator
    } catch (error) {
        yield put(FailgetjobRequest(error));
    }
}

export function* watchgetjob() {
    yield takeEvery(getjobRequest, getjob);
}
