import { useState } from 'react';
import './index.css';

if (!document.startViewTransition) {
	document.startViewTransition = (fn) => {
		fn();
	};
}

const NativeApp = () => {
	const [page, setPage] = useState(0);

	const changePage = (p) => {
		let back = null;

		if (page < p) {
			back = false;
		} else if (page > p) {
			back = true;
		} else {
			return;
		}

		document.startViewTransition(() => {
			if (back) {
				document.documentElement.classList.add('back');
			} else {
				document.documentElement.classList.remove('back');
			}
			setPage(p);
		});
	};

	return (
		<div className="native-app">
			<p>View Transition API - Sliding Effect Demo</p>

			{page === 0 && (
				<div className="section">
					<p>Page 0</p>
					<hr />
					<button type="button" onClick={() => changePage(1)}>
						Page 1
					</button>
					<hr />
					<div className="text">
						Here we've created a custom CSS animation and applied it to the
						::view-transition-old(figure-caption) and
						::view-transition-new(figure-caption) pseudo-elements. We've also
						added a number of other styles to both to keep them in the same
						place and stop the default styling from interfering with our custom
						animations.
					</div>
				</div>
			)}

			{page === 1 && (
				<div className="section">
					<p>Page 1</p>
					<hr />
					<button type="button" onClick={() => changePage(0)}>
						Page 0
					</button>
					<button type="button" onClick={() => changePage(2)}>
						Page 2
					</button>
					<hr />
					<div className="text">
						Note that we also discovered another transition option that is
						simpler and produced a nicer result than the above. Our final view
						transition ended up looking like this:
					</div>
				</div>
			)}

			{page === 2 && (
				<div className="section">
					<p>Page 3</p>
					<hr />
					<button type="button" onClick={() => changePage(1)}>
						Page 1
					</button>
					<hr />
					<div className="text">
						This works because, by default, ::view-transition-group transitions
						width and height between the old and new views. We just needed to
						set a fixed height on both states to make it work.
					</div>
				</div>
			)}
		</div>
	);
};

export default NativeApp;
