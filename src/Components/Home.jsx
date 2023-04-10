import React from 'react';
import HomeHeaderSection from './HomeHeaderSection';
import HomeCategorySection from './HomeCategorySection';
import HomeFeaturedSection from './HomeFeaturedSection';

const Home = () => {
    return (
        <div>
            <HomeHeaderSection></HomeHeaderSection>
            <HomeCategorySection></HomeCategorySection>
            <HomeFeaturedSection></HomeFeaturedSection>
        </div>
    );
};

export default Home;