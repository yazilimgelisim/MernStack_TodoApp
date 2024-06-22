import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/index.scss';
import { Provider } from 'react-redux';
import store from './stores/store.js'


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
      <Provider store={store}>
            <App />
      </Provider>
);