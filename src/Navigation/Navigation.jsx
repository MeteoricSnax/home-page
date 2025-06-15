import './Navigation.css';

const Navigation = ({ onNavigationClickHandler }) => {
	return (
		<div id='navigation'>
			<a onClick={(e) => onNavigationClickHandler(e, 'home')}>Home</a>
			<a onClick={(e) => onNavigationClickHandler(e, 'jellyfin')}>Jellyfin</a>
			<a onClick={(e) => onNavigationClickHandler(e, 'about')}>About</a>
			<a onClick={(e) => onNavigationClickHandler(e, 'contact')}>Kontakt</a>
		</div>
	);
};

export default Navigation;
