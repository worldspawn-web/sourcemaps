import { Background, Container } from '../../widgets';
import { Navigation, RenderMaps } from '../../common';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <Background>
      <Navigation />
      <Container>
        <RenderMaps />
      </Container>
    </Background>
  );
};
