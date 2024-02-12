import { all } from 'redux-saga/effects';
import { watchcreatejob, watchgetjob } from './createjob';

function rootSaga() {

     yield all([watchcreatejob(), watchgetjob()])
}

export default rootSaga;