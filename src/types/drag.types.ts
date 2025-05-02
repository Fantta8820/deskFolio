import { RefObject } from "react";

export type Position = {
  x: number;
  y: number;
};

export type handleMovementDown = {
  e: React.MouseEvent<Element, MouseEvent>;
  windowRef: RefObject<HTMLDivElement | null>;
  setOffSet: (value: React.SetStateAction<Position>) => void;
  setIsDragging: (value: React.SetStateAction<Boolean>) => void;
};

export type HandleMouseMovementParams = {
  e: MouseEvent;
  isDragging: Boolean;
  offSet: Position;
  windowRef: RefObject<HTMLDivElement | null>;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
};
