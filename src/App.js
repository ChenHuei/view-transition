import { Routes, Route } from 'react-router';
import NativeApp from './pages/NativeApp';
import Gallery from './pages/Gallery';
import Layout from './components/Layout';

import './App.css';

const PAGES = [
	{ link: '/native-app', text: 'NativeApp', component: NativeApp },
	{ link: '/gallery', text: 'Gallery', component: Gallery },
];

const App = () => {
	return (
		<Routes>
			<Route element={<Layout list={PAGES} />}>
				{PAGES.map(({ link, component: Comp }) => (
					<Route key={link} path={link} element={<Comp />} />
				))}
				<Route path="/" element={PAGES[0].component()} />
				<Route path="*" element={<p>There's nothing here: 404!</p>} />
			</Route>
		</Routes>
	);
};

export default App;
