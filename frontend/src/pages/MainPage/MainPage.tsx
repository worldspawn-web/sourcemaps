import { Background, Container } from '../../widgets';
import { Navigation } from '../../common';

import styles from './MainPage.module.scss';
import { RenderMaps } from '../../common/RenderMaps/RenderMaps';

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
