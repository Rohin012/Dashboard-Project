import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "saga/recruiter/rootsaga";
import createjobslice from "slice/recruiter/createjobslice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        jobs: createjobslice
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga)
export default store;