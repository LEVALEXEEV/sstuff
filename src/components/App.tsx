import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from '../pages/front-page';
import CatalogPage from '../pages/catalog-page';
import SizesPage from '../pages/sizes-page';
import FullSizeTable from './full-size-table';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<FrontPage/>} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="sizes" element={<SizesPage />} />
          <Route path="fstable" element={<FullSizeTable />} />
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
