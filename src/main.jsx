import './assets/scss/index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Router } from './lib/router';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Router />
	</StrictMode>,
);