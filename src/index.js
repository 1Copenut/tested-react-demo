import React from 'react';
import ReactDOM from 'react-dom';
import env from './config/env';
import a11y from 'react-a11y';
import axe from 'react-axe';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if (env === 'development') {
    // Front-side scanning of React components
    a11y(React, {
        ReactDOM,
        throw: false,
    });

    // Back-side scanning of rendered HTML
    axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
