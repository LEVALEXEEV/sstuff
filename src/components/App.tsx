import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from '../pages/front-page';
import CatalogPage from '../pages/catalog-page';
import SizesPage from '../pages/sizes-page';
import ItemPage from '../pages/item-page';
import CartPage from '../pages/cart-page';
import ShipPage from '../pages/ship-page';
import AuthorsPage from '../pages/authors-page';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { toast } from 'react-toastify';
import { setAllowCookies } from '../store/actions';

function App() {
  const allowCookies = useAppSelector(store => store.allowCookies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!allowCookies) {
      toast.info('Приложение использует файлы cookies', {
        position: 'bottom-center',
        bodyStyle: {
            fontFamily: '"Montserrat", sans-serif',
            fontSize: '20px'
        },
        theme: 'dark',
        onClose() {
          dispatch(setAllowCookies(true));
        },
      });
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="sstuff">
          <Route index element={<FrontPage/>} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="sizes" element={<SizesPage />} />
          <Route path="item/:article" element={<ItemPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="ship" element={<ShipPage />} />
          <Route path="authors" element={<AuthorsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
