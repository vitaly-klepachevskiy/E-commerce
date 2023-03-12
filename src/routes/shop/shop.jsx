import { Route, Routes } from 'react-router-dom';
import Category from '../category/category';
import CategoriesPreview from '../categories-preview/categories-preview';
import './shop.scss';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { setCategoriesMap } from '../../store/categories/categories.action';
import { useDispatch } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
