import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './store';
import { setAllowCookies, setCart, setDevice } from './store/actions';
import { getCookie } from './utils';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(setDevice((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false)));


const cart = getCookie('cart');
if (cart) {
  store.dispatch(setCart(JSON.parse(cart)));
}

const allowCookies = getCookie('allowCookies');
if (allowCookies) {
  store.dispatch(setAllowCookies(JSON.parse(allowCookies)));
}


root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App/>
      <ToastContainer
        autoClose={false}
        closeOnClick
        draggable
        transition={Slide}
        draggablePercent={60}
      />
    </Provider>
  </React.StrictMode>
);
