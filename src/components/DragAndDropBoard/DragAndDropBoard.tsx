import React, { useMemo } from "react";
import DraggableItem from "../DraggableItem/DraggableItem";
import DropZone from "../DropZone/DropZone";
import { BoardContainer, CategoriesContainer, ItemsContainer } from "./DragAndDropBoard.styled";
import { useProgress } from "src/context/ProgressContext";

const COLORS_POOL = [
  "#FF5733", // Naranja
  "#33FF57", // Verde
  "#3357FF", // Azul
  "#FF33A1", // Rosa
  "#A133FF", // Púrpura
  "#FFD733", // Amarillo
  "#33FFF2", // Turquesa
];

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

  const assignRandomColors = (categories: { id: string }[]) => {
    const shuffledColors = [...COLORS_POOL].sort(() => Math.random() - 0.5);
    const categoryColors: Record<string, string> = {};
    categories.forEach((category, index) => {
      categoryColors[category.id] = shuffledColors[index % COLORS_POOL.length];
    });
    return categoryColors;
  };

  const categoryColors = useMemo(
    () => assignRandomColors(gameData.categories),
    [gameData.categories]
  );

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
            categoryColor={categoryColors[category.id]}
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
            categoryColor={categoryColors[item.category]}
          />
        ))}
      </ItemsContainer>
    </BoardContainer>
  );
};

export default DragAndDropBoard;
