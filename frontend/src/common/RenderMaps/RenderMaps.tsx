import styles from './RenderMaps.module.scss';
import data from '../../data/maps.json';

export const RenderMaps = () => {
  const mapsData = data.maps;
  const noImageLink = '../public/no_image_available.png';

  const renderCards = (map) => {
    const { name, game, gamemode, date } = map;
    let { link, image, tournament } = map;

    if (!image) image = noImageLink;
    if (!link) link = '#';
    if (!tournament) tournament = false;

    return (
      <div className={styles.maps__map}>
        <a href={link}>
          <img src={image} className={styles.maps__image} />
          <span className={styles.maps__name}>{name}</span>
        </a>
      </div>
    );
  };

  const sortedMaps = mapsData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section className={styles.maps__wrapper}>
      {sortedMaps.map((map) => renderCards(map))}
    </section>
  );
};
