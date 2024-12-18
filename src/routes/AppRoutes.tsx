import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "src/pages/HomePage";
import LearnPage from "src/pages/LearnPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/learn/:language" element={<LearnPage />} />

      {/* <Route path="/learn/:language/:activity" element={<ActivityPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
