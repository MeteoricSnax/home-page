import { useState } from 'react';
import Navigation from './Navigation/Navigation';
import Content from './Content';

const App = () => {
	const [route, setRoute] = useState(location.hash.length > 0 ? location.hash.split('#')[1] : '');
	/**
	 *
	 * @param {MouseEvent} event
	 * @param {String} route
	 * @returns {void}
	 */
	const onNavigationClickHandler = (event, newRoute) => {
		event.preventDefault();
		if (newRoute.toLowerCase() === route) return;
		setRoute(newRoute.toLowerCase());
		location.hash = newRoute;
	};
	return (
		<>
			<Navigation onNavigationClickHandler={onNavigationClickHandler} />
			<Content route={route} />
		</>
	);
};

export default App;
