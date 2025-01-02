import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Routes, Route } from "react-router-dom";
import DragAndDropGame from "src/pages/DragAndDropGame";
import DragAndDropGameList from "src/pages/DragAndDropGameListPage";
import HangmanList from "src/pages/HangmanList";
import HangmanPage from "src/pages/HangmanPage";
import HomePage from "src/pages/HomePage";
import LearnPage from "src/pages/LearnPage";
import SongList from "src/pages/SongList";
import SongPage from "src/pages/SongPage";

const AppRoutes: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/:language" element={<LearnPage />} />

        <Route path="/:language/canciones" element={<SongList />} />
        
        <Route path="/:language/canciones/:cancionesTitle" element={<SongPage />} />

        <Route path="/:language/juegos-de-arrastre" element={<DragAndDropGameList />} />

        <Route path="/:language/juegos-de-arrastre/:title" element={<DragAndDropGame />} />

        <Route path="/:language/ahoracado" element={<HangmanList />} />

        <Route path="/:language/ahorcado/:theme" element={<HangmanPage />} />

      </Routes>
    </DndProvider>
  );
};

export default AppRoutes;
