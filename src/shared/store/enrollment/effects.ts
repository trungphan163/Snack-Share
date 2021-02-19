import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import { Action } from './types';
import { getEnrollments, setEnrollmentsLoading } from './action';

export const errorResponse = (errData: any): string | undefined => {
    const errRes = errData?.message;
    return errRes;
};

export const getAllEnrollments = () => (dispatch: Dispatch<Action>) => {
    dispatch(setEnrollmentsLoading());
    const config: AxiosRequestConfig = {
        method: 'get',
        url: '/enrollments',
    };

    axios(config)
        .then((res) => dispatch(getEnrollments(res.data)))
        .catch((_err) => dispatch(getEnrollments({})));
};

export const addEnrollments = (
    data: any,
    errorCb: Function,
    doneCb: Function,
    clearInput: Function
) => (_dispatch: Dispatch<Action>) => {
    const config: AxiosRequestConfig = {
        method: 'post',
        url: '/enrollbystudent/add',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    };

    axios(config)
        .then((_res) => {
            doneCb('Enroll Course Successfully!');
            clearInput();
        })
        .catch((err) => {
            clearInput();
            errorCb(errorResponse(err));
        });
};

export const deleteEnrollmentsByID = (
    id: string,
    errorCb: Function,
    doneCb: Function,
    setData: Function
) => (_dispatch: Dispatch<Action>) => {
    const config: AxiosRequestConfig = {
        method: 'delete',
        url: `/enrollment?id=${id}`,
        headers: {},
    };

    axios(config)
        .then((_res) => {
            doneCb('Delete Enrollment Successfully!');
            console.log(id);
            setData();
        })
        .catch((err) => {
            errorCb(errorResponse(err));
        });
};
