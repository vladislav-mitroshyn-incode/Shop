import Cards from './components/Cards/Cards';
import Collections from './components/Collectoins/Collections';
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
        <Collections />
      </main>
    </div>
  );
};

export default App;
