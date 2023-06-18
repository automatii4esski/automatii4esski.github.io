import React from 'react';
import styles from './App.module.scss';
import About from './pages/about/About';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <div className={styles.container}>
          <About />
        </div>
      </main>
    </Provider>
  );
}

export default App;
