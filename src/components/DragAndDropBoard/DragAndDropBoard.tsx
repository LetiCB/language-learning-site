import React from "react";
import DraggableItem from "../DraggableItem/DraggableItem";
import DropZone from "../DropZone/DropZone";
import { BoardContainer, CategoriesContainer, ItemsContainer } from "./DragAndDropBoard.styled";
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
  type: string;
  content: string;
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
  onAlert: (message: string, type: "success" | "error") => void;
};

const DragAndDropBoard: React.FC<GameBoardProps> = ({ gameData, onAlert }) => {
  const { addCorrectItem, placedItems, addPlacedItem } = useProgress();

  const handleDrop = (categoryId: string, { id, content, category }: Item) => {
    if (placedItems.includes(id)) {
      onAlert(`"${content}" ya ha sido colocado.`, "error");
      return;
    }
    if (category === categoryId) {
      addPlacedItem(id);
      addCorrectItem();
      onAlert(`¡Correcto! "${content}" pertenece a "${categoryId}"`, "success");
    } else {
      onAlert(`¡Ups! "${content}" no pertenece a "${categoryId}"`, "error");
    }
  };
 
  return (
    <BoardContainer>
      <CategoriesContainer>
        {gameData.categories.map((category) => (
          <DropZone
            key={category.id}
            category={category.id}
            onDrop={(item) => handleDrop(category.id, item)}
          >
            {category.type === "image" && category.content ? (
              <img src={`/images/dragAndDrop/${category.content}`} alt={category.name} />
            ) : (
              <h3>{category.name}</h3>
            )}
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
