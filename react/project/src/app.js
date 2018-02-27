import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import IndexScreen from './screens/IndexScreen';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(IndexScreen);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./screens/IndexScreen', () => {
        render(IndexScreen)
    });
}