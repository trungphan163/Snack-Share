import * as React from 'react';
import { useDispatch } from 'react-redux';

import { getAllUsers } from 'store/users/effects';

import PageHeader from 'components/PageHeader/PageHeader';
import ShowAllUsersContainer from 'containers/ShowAllUsersContainer/ShowAllUsersContainer';

const ShowAllUsers = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    return (
        <>
            <PageHeader title="List Users" />
            <ShowAllUsersContainer />
        </>
    );
};

export default ShowAllUsers;
