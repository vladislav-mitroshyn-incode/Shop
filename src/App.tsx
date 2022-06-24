import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRouter from './components/Routers/AppRouter';

const App = () => {
  return (
    <div className={styles.app}>
      <header>
        <Header />
      </header>
      <main>
        <AppRouter />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
