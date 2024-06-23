import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from '../pages/front-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<FrontPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
