import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import CategriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    // <Fragment>
    //   {Object.keys(categoriesMap)
    //     .map(title => {
    //       const products = categoriesMap[title];
    //       return <CategoryPreview key={title} title={title} products={products} />;
    //     })}
    // </Fragment>
    <Routes>
      <Route index element={<CategriesPreview />}></Route>
      <Route path=':category' element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
