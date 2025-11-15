import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import CategoryTabs from './components/CategoryTabs';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <CategoryTabs />

      <Row title="Hollywood Movies" fetchUrl="popular" />
      <Row title="Trending Now" fetchUrl="top_rated" />
    </div>
  );
}