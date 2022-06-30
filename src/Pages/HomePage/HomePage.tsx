import React from 'react';
import Advantage from './Advantage/Advantage';
import Cards from './Cards/Cards';
import Collections from './Collections/Collections';
import FashionBlog from './FashionBlog/FashionBlog';
import Instagram from './Instagram/Instagram';
import NewArrivals from './NewArrivals/NewArrivals';
import PopularCategories from './PopularCategories/PopularCategories';
import SectionSlider from './SectionSlider/SectionSlider';
import TrandingNow from './TrandingNow/TrandingNow';

const HomePage = () => {
  return (
    <>
      <SectionSlider />
      <Cards />
      <NewArrivals />
      <Collections />
      <PopularCategories />
      <TrandingNow />
      <Advantage />
      <Instagram />
      <FashionBlog />
    </>
  );
};

export default HomePage;
