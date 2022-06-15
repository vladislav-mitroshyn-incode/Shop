import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import NewArrivals from './components/NewArrivals/NewArrivals';
import PopularCategories from './components/PopularCategories/PopularCategories';
import SectionSlider from './components/SectionSlider/SectionSlider';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <SectionSlider />
        <Cards />
        <NewArrivals />
        <PopularCategories />
      </main>
    </div>
  );
};

export default App;
