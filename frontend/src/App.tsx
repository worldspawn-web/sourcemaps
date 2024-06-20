import { Suspense } from 'react';

import { Router } from './router';

// import styles from './App.module.scss';

export default function App() {
  return (
    <Suspense>
      <Router />
    </Suspense>
  );
}
