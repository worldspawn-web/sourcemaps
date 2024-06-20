import { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routenames } from './routenames';
import { MainPage } from '../pages';

export const Router: FC = () => (
  <Routes>
    <Route path={routenames.HOME} element={<MainPage />} />
  </Routes>
);
