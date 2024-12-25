import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "src/pages/HomePage";
import LearnPage from "src/pages/LearnPage";
import SongList from "src/pages/SongList";
import SongPage from "src/pages/SongPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/:language" element={<LearnPage />} />

      <Route path="/:language/canciones" element={<SongList />} />
      
      <Route path="/:language/canciones/:cancionesTitle" element={<SongPage />} />

    </Routes>
  );
};

export default AppRoutes;
