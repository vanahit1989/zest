import 'src/core/polyfills';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'src/App';
import { initialize } from 'src/core/initialisation';

function render() {
    const reactContainer = document.createElement('div');
    reactContainer.className = 'app';
    document.body.appendChild(reactContainer);

    ReactDOM.render(<App />, reactContainer);
}

initialize().then(render);
