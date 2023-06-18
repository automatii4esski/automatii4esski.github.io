import React from 'react';
import styles from './App.module.scss';
import About from './pages/about/About';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './pages/create/Create';

function App() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <div className={styles.container}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/create" element={<Create />} />
              <Route path="*" element={<About />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </Provider>
  );
}

export default App;
