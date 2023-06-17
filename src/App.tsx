import React from 'react';
import styles from './App.module.scss';
import About from './pages/About';

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <About />
      </div>
    </main>
  );
}

export default App;
