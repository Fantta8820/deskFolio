import { useState, useRef } from "react";
import { Position } from "../types/drag.types";
import { setLocalStorageValues } from "../utils/WindowFuncs";

export function useDraggableHooks() {

  const items = setLocalStorageValues("MainWindow");

  const windowRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<Boolean>(false);
  //prettier-ignore
  const [position, setPosition] = useState<Position>(items.position); //todo: Aplicar responsividade
  const [offSet, setOffSet] = useState<Position>({ x: 0, y: 0 });  

  //prettier-ignore
  return {    
    windowRef, isDragging, setIsDragging, position, setPosition, offSet, setOffSet
  }
}
