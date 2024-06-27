import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';
import links from '../../data/links.json';

interface ButtonLinkProps {
  name: string;
  url: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ name, url }) => (
  <Link className={styles.nav__btn} to={url}>
    {name}
  </Link>
);

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ButtonLink name="Maps" url={links.maps} />
      <ButtonLink name="YouTube" url={links.youtube} />
      <ButtonLink name="GitHub" url={links.github} />
    </nav>
  );
};
