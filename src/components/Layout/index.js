import { Outlet, NavLink } from 'react-router';

const Layout = ({ list }) => {
	const style = ({ isActive }) => ({
		fontWeight: isActive ? 'bold' : 'normal',
	});

	return (
		<>
			<nav
				style={{
					display: 'flex',
					gap: '1rem',
					padding: '1rem',
					borderBottom: 'solid 1px',
				}}>
				{list.map(({ link, text }) => (
					<NavLink key={link} to={link} style={style}>
						{text}
					</NavLink>
				))}
			</nav>

			<main style={{ padding: '1rem', height: 'calc(100vh - 50px)' }}>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
