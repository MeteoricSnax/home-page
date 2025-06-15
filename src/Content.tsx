import Home from './Pages/Home';
import Jellyfin from './Pages/Jellyfin';

const Content = ({ route }) => {
	switch (route) {
		case 'jellyfin':
			return <Jellyfin />;
		case 'home':
			return <Home />;
		default:
			return (
				<div>
					<p>{route}</p>
				</div>
			);
	}
};

export default Content;
