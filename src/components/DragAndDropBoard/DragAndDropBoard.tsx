import React, { useState } from "react";
import DraggableItem from "../DraggableItem/DraggableItem";
import DropZone from "../DropZone/DropZone";
import { BoardContainer, CategoriesContainer, ItemsContainer } from "./DragAndDropBoard.styled";
import AlertMessage from "../Alert/AlertMessage";
import { useProgress } from "src/context/ProgressContext";

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
  const { correctItems, addCorrectItem, placedItems, addPlacedItem } = useProgress();

  const handleDrop = (categoryId: string, item: Item) => {
    if (placedItems.includes(item.id)) {
      setAlert({ message: `"${item.content}" ya ha sido colocado.`, type: "error" });
      return;
    }
  
    if (item.category === categoryId) {
      addPlacedItem(item.id);
      addCorrectItem();
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
          <DraggableItem
            key={item.id}
            item={item}
            isCorrect={placedItems.includes(item.id)}
          />
        ))}
      </ItemsContainer>
    </BoardContainer>
  );
};

export default DragAndDropBoard;
