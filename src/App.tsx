import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import ListBirthsday from './components/birthsday/ListBirthsday';
import NavBar from './components/NavBar';
import ReviewsList from './components/reviews/ReviewsList';
import ListTours from './components/tours/ListTours';
// import cl from "../styles/birthsday.module.css";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />} />
      <Route path="/about" element={<NavBar />} />
      <Route path="/birthsday" element={<ListBirthsday />} />
      <Route path="/tours" element={<ListTours />} />
      <Route path="/reviews" element={<ReviewsList />} />
    </Routes>
  );
}

export default App;
