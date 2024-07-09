import styles from './ImageCard.module.css';

const ImageCard = ({ alt_description, urls, updateModalStateData }) => {
	return (
		<div>
			<img
    				className={`${styles.cardWrapper} ${styles.cardImage}`}
    				onClick={() => updateModalStateData(urls.regular, alt_description)}
    				src={urls.small}
    				alt={alt_description}
			/>
			<p className={styles.cardDescription}>{alt_description}</p>
		</div>
	);
};

export default ImageCard;
