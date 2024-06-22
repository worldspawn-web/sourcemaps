import { Background, Container, ContainerHeader } from '../../widgets';
import { Navigation } from '../../common';
import { levelCalculate } from '../../helpers';

import styles from './MainPage.module.scss';

const MainPageBio = () => {
  return (
    <section className={styles.mp__wrapper}>
      <img className={styles.mp__avatar} src="../public/avatar.jpg" />
      {/* redo with separate component */}
      <section>
        <table>
          <tr>
            <td className={styles.mp__info_header}>Status:</td>
            <td className={styles.mp__info}>Online 24/7</td>
          </tr>
          <tr>
            <td className={styles.mp__info_header}>Level:</td>
            <td className={styles.mp__info}>{levelCalculate()}</td>
          </tr>
        </table>
      </section>
    </section>
  );
};

export const MainPage = () => {
  return (
    <Background>
      <Navigation />
      <Container>
        {/* {consider removing} */}
        <ContainerHeader>Worldspawn Mapping Portfolio</ContainerHeader>
        <MainPageBio />
      </Container>
    </Background>
  );
};
