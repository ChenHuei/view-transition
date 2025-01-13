import React from 'react';
import './index.css';

if (!document.startViewTransition) {
	document.startViewTransition = (fn) => {
		fn();
	};
}

const App = () => {
	const toggleImageView = (index) => {
		const image = document.getElementById(`js-gallery-image-${index}`);
		image.classList.add('gallery__image--active');

		const imageParentElement = image.parentElement;

		document.startViewTransition(() => moveImageToModal(image));

		const overlayWrapper = document.getElementById('js-overlay');

		overlayWrapper.onclick = async function () {
			const transition = document.startViewTransition(() =>
				moveImageToGrid(imageParentElement),
			);

			await transition.finished;
			image.classList.remove('gallery__image--active');
		};
	};

	const moveImageToModal = (image) => {
		const overlayWrapper = document.getElementById('js-overlay');
		const overlayContent = document.getElementById('js-overlay-target');

		overlayWrapper.classList.add('overlay--active');
		overlayContent.append(image);
	};

	const moveImageToGrid = (imageParentElement) => {
		const overlayWrapper = document.getElementById('js-overlay');
		const overlayContent = document.getElementById('js-overlay-target');

		imageParentElement.append(overlayContent.querySelector('img'));
		overlayWrapper.classList.remove('overlay--active');
	};

	return (
		<div>
			<aside id="js-overlay" className="overlay">
				<div id="js-overlay-target" className="overlay__inner"></div>
			</aside>
			<div className="gallery">
				{[1, 2, 3, 4, 5, 6].map((index) => (
					<figure
						key={index}
						style={{ '--color': getColor(index) }}
						onClick={() => toggleImageView(index)}>
						<div>
							<img
								id={`js-gallery-image-${index}`}
								className="gallery__image"
								src={`https://images.unsplash.com/photo-1581260466152-d2c0303e54f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=70&sig=${index}`}
								alt={`Gallery ${index}`}
							/>
						</div>
						<figcaption>Image {index}</figcaption>
					</figure>
				))}
			</div>
		</div>
	);
};

const getColor = (index) => {
	const colors = [
		'#dfe7fd',
		'#f8ad9d',
		'#d8e2dc',
		'#c1d3fe',
		'#d0f4de',
		'#7bf1a8',
	];
	return colors[(index - 1) % colors.length];
};

export default App;
