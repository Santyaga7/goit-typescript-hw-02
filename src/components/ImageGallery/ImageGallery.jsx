import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ gallery, openModal, updateModalStateData }) => {
	const handleImageClick = (imageData) => {
		openModal(imageData);
	};

	return (
		<ul className={styles.itemsContainer}>
			{gallery.map(({ id, alt_description, urls }) => (
				<li className={styles.cardItem} key={id} onClick={() => handleImageClick({ id, alt_description, urls })}>
					<ImageCard
						urls={urls}
						alt_description={alt_description}
						updateModalStateData={updateModalStateData}
					/>
				</li>
			))}
		</ul>
	);
};

export default ImageGallery;
