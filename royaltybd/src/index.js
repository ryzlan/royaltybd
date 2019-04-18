import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import {store} from './redux/store'
import Footer from './component/Footer/Footer';

const withFooter = WrappedComponent =>() =>[
    <WrappedComponent key="1" />,
    <Footer key="2" />
]

const wrapper =() =>(
<Provider store={store}>
    <App />
</Provider>
)

const WrappedWithFooter = withFooter(wrapper);

ReactDOM.render(
    <WrappedWithFooter />
, document.getElementById('root'));


serviceWorker.unregister();
