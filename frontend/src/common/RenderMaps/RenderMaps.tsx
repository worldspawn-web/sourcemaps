import styles from './RenderMaps.module.scss';
import data from '../../data/maps.json';

interface Map {
  name: string;
  game: string[];
  gamemode: string;
  date: string | null;
  link: string | null;
  image: string | null;
  tournament?: boolean;
}

export const RenderMaps = () => {
  const mapsData = data.maps;
  const noImageLink = '../public/no_image_available.png';

  const renderCards = (map: Map) => {
    // TODO: add modal window with map information
    // + game, gamemode, date
    const { name } = map;
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
