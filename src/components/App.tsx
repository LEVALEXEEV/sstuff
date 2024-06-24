import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from '../pages/front-page';
import CatalogPage from '../pages/catalog-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<FrontPage/>} />
          <Route path="catalog" element={<CatalogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
