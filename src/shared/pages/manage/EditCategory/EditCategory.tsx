import * as React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import EditCategoryContainer from 'containers/manage/EditCategoryContainer/EditCategoryContainer';

import { getCategory } from 'store/category/selectors';

const EditCategory = () => {
    const category = useSelector(getCategory);
    const location = useLocation();

    const pathName = location?.pathname || '';
    const categoryFilter = category.category.find((x: any) => pathName?.includes(x?._id));
    const pathNameHandle = pathName.split('/categories/edit/').join('');

    return (
        <>
            <PageHeader title="Edit Category" />
            {category?.loading ? (
                <CircleLoader />
            ) : (
                <EditCategoryContainer
                    pathName={pathNameHandle}
                    loading={category.loading}
                    category={categoryFilter}
                />
            )}
        </>
    );
};

export default EditCategory;