import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    isLoading: false,
    data: null,
    error: null,
    listdata: []
}

const createjobslice = createSlice({
    name: "job ",
    initialState,
    reducers: {

        createjobRequest: function (state, { payload }) {
            state.isLoading = true;
            state.data = payload
        },
        createjobSuc: function (state, { payload }) {
            state.isLoading = false;
        },
        createjobFail: function (state, { payload }) {
            state.isLoading = false;
            state.error = payload
        },
        getjobRequest: function (state, { payload }) {
            state.isLoading = true;

        },
        SucgetjobRequest: function (state, { payload }) {
            state.isLoading = true;
            state.listdata = payload
        },
        FailgetjobRequest: function (state, { payload }) {
            state.isLoading = false;
            state.error = payload
        },


    }
});

export const {
    createjobRequest,
    createjobSuc,
    createjobFail,
    getjobRequest,
    SucgetjobRequest,
    FailgetjobRequest } = createjobslice.actions

export default createjobslice.reducer