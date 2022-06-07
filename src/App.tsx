import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import SectionSlider from './components/SectionSlider/SectionSlider';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <SectionSlider />
        <Cards />
      </main>
    </div>
  );
};

export default App;
