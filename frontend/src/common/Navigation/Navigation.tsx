import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

interface ButtonLinkProps {
  name: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ name }) => (
  <Link className={styles.nav__btn} to={`#${name.toLowerCase()}`}>
    {name}
  </Link>
);

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ButtonLink name="Maps" />
      <ButtonLink name="YouTube" />
      <ButtonLink name="GitHub" />
    </nav>
  );
};
