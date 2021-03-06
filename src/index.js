import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import history from './history'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Router history={history}>
					<App />
				</Router>,
				 document.querySelector('#root')
				);

serviceWorker.unregister();
