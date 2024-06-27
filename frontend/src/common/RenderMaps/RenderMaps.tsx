import data from '../../data/maps.json';
import styles from './RenderMaps.module.scss';

export const RenderMaps = () => {
  const mapsData = data;

  return (
    <section className={styles.maps__wrapper}>
      {mapsData.maps.map((map) => {
        const { name, game, gamemode, date } = map;
        let { link, image, tournament } = map;

        if (!image) image = '../public/avatar.jpg';
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
      })}
    </section>
  );
};
