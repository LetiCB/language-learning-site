import React from "react";
import { useDrop } from "react-dnd";
import { DropZoneContainer } from "./DropZone.styles";

type Item = {
  id: string;
  type: "word" | "image";
  content: string;
  category: string;
};

type DropZoneProps = {
  category: string;
  onDrop: (item: Item) => void;
  children: React.ReactNode;
  categoryColor: string;
};

const DropZone = React.forwardRef<HTMLDivElement, DropZoneProps>(
  ({ category, onDrop, children, categoryColor }, ref) => {
    const [, dropRef] = useDrop({
      accept: "ITEM",
      drop: (item: Item) => {
        onDrop(item);
      },
    });
  
    const combinedRef = (node: HTMLDivElement | null) => {
        dropRef(node);
        if (ref) {
          if (typeof ref === "function") {
            ref(node);
          } else if (ref && "current" in ref) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }
        }
      };
  
      return (
        <DropZoneContainer ref={combinedRef} categoryColor={categoryColor}>
          {children}
        </DropZoneContainer>
      );
    }
  );  

DropZone.displayName = "DropZone";

export default DropZone;
