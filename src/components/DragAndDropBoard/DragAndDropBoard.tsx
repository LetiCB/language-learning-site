import React from "react";
import DraggableItem from "../DraggableItem/DraggableItem";
import DropZone from "../DropZone/DropZone";
import { BoardContainer, CategoriesContainer, ItemsContainer } from "./DragAndDropBoard.styled";

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
  const handleDrop = (categoryId: string, item: Item) => {
    console.log("Drop event detected:", { categoryId, item });
    if (item.category === categoryId) {
      alert(`¡Correcto! "${item.content}" pertenece a "${categoryId}"`);
    } else {
      alert(`¡Ups! "${item.content}" no pertenece a "${categoryId}"`);
    }
  };

  return (
    <div>
    <BoardContainer>
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
    </div>
  );
};
  
export default DragAndDropBoard;
  