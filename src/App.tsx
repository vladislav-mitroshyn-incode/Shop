import Advantage from './components/Advantage/Advantage';
import Cards from './components/Cards/Cards';
import Collections from './components/Collections/Collections';
import FashionBlog from './components/FashionBlog/FashionBlog';
import Header from './components/Header/Header';
import Instagram from './components/Instagram/Instagram';
import NewArrivals from './components/NewArrivals/NewArrivals';
import PopularCategories from './components/PopularCategories/PopularCategories';
import SectionSlider from './components/SectionSlider/SectionSlider';
import TrandingNow from './components/TrandingNow/TrandingNow';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <SectionSlider />
        <Cards />
        <NewArrivals />
        <Collections />
        <PopularCategories />
        <TrandingNow />
        <Advantage />
        <Instagram />
        <FashionBlog />
      </main>
    </div>
  );
};

export default App;
