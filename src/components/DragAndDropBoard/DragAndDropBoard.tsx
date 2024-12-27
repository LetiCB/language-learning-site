import React, { useState } from "react";
import DraggableItem from "../DraggableItem/DraggableItem";
import DropZone from "../DropZone/DropZone";
import { BoardContainer, CategoriesContainer, ItemsContainer } from "./DragAndDropBoard.styled";
import AlertMessage from "../Alert/AlertMessage";

type Item = {
  id: string;
  type: string;
  content: string;
  category: string;
};

type Category = {
  id: string;
  name: string;
};

type GameData = {
  id?: string;
  language: string;
  title: string;
  description?: string;
  image?: string;
  categories: Category[];
  items: Item[];
};

type GameBoardProps = {
  gameData: GameData;
};

const DragAndDropBoard: React.FC<GameBoardProps> = ({ gameData }) => {
  const [alert, setAlert] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleDrop = (categoryId: string, item: Item) => {
    if (item.category === categoryId) {
      setAlert({ message: `¡Correcto! "${item.content}" pertenece a "${categoryId}"`, type: "success" });
    } else {
      setAlert({ message: `¡Ups! "${item.content}" no pertenece a "${categoryId}"`, type: "error" });
    }
  };

  return (
    <BoardContainer>
      {alert && (
        <AlertMessage
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      <CategoriesContainer>
        {gameData.categories.map((category) => (
          <DropZone
            key={category.id}
            category={category.id}
            onDrop={(item) => handleDrop(category.id, item)}
          >
            <h3>{category.name}</h3>
          </DropZone>
        ))}
      </CategoriesContainer>
      <ItemsContainer>
        {gameData.items.map((item) => (
          <DraggableItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </BoardContainer>
  );
};
  
export default DragAndDropBoard;
  