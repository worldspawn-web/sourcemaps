import { Background, Container, ContainerHeader } from '../../widgets';
import { Navigation } from '../../common';

// import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <Background>
      <Navigation />
      <Container>
        <ContainerHeader>Worldspawn Mapping Portfolio</ContainerHeader>
      </Container>
    </Background>
  );
};
