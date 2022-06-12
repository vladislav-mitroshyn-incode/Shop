import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import NewArrivals from './components/NewArrivals/NewArrivals';
import SectionSlider from './components/SectionSlider/SectionSlider';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <SectionSlider />
        <Cards />
        <NewArrivals />
      </main>
    </div>
  );
};

export default App;
