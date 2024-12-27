import React from "react";
import { useDrag } from "react-dnd";
import { DraggableItemContainer } from "./DraggableItem.styles";

type Item = {
  id: string;
  type: string;
  content: string;
  category: string;
};

const DraggableItem = React.forwardRef<HTMLDivElement, { item: Item; isCorrect: boolean }>(
  ({ item, isCorrect }, ref) => {
    const [, dragRef] = useDrag({
      type: "ITEM",
      item,
      canDrag: !isCorrect,
    });

    return (
      <DraggableItemContainer
        isCorrect={isCorrect}
        ref={(node) => {
          dragRef(node);
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }
        }}
      >
        {item.type === "image" ? (
          <img src={item.content} alt="draggable" />
        ) : (
          <span>{item.content}</span>
        )}
      </DraggableItemContainer>
    );
  }
);

DraggableItem.displayName = "DraggableItem";

export default DraggableItem;
