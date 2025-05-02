import { useState, useRef } from "react";
import { Position } from "../types/drag.types";

export function useDraggableHooks() {
  const windowRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<Boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [offSet, setOffSet] = useState<Position>({ x: 0, y: 0 });

  //prettier-ignore
  return {    
    windowRef, isDragging, setIsDragging, position, setPosition, offSet, setOffSet
  }
}
