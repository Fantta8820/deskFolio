//prettier-ignore
import { HandleMouseMovementParams, handleMovementDown, Position } from "./../types/drag.types";

//prettier-ignore
export function handleMouseDown({e, windowRef, setOffSet, setIsDragging }: handleMovementDown) {
  const window = windowRef.current?.getBoundingClientRect();

  setOffSet({
    x: e.clientX - window!.left,
    y: e.clientY - window!.top,
  });

  setIsDragging(true);
}

//prettier-ignore
export function handleMouseMovement({ e, isDragging, offSet, windowRef, setPosition }: HandleMouseMovementParams) {
  if (!isDragging) return;

  const newX: number = e.clientX - offSet.x;  
  const newY: number = e.clientY - offSet.y;

  const windowWidth: number | undefined = windowRef.current!.offsetWidth;
  const windowHeight: number | undefined = windowRef.current!.offsetHeight;

  const screenWidth: number = window.innerWidth;
  const screenHeight: number = window.innerHeight;

  const boundedX: number = Math.max(
    0,
    Math.min(newX, screenWidth - windowWidth)
  );
  const boundedY: number = Math.max(
    0,
    Math.min(newY, screenHeight - windowHeight - 40)
  );

  setPosition({
    x: boundedX,
    y: boundedY,
  });
}

//prettier-ignore
export function handleMouseUp(setIsDragging: (value: React.SetStateAction<Boolean>) => void){
  setIsDragging(false);
}

export function setLocalStorageValues() {
  let isOpen: boolean;
  let position: { x: number; y: number };

  if (localStorage.getItem("MainWindow")) {
    const items = localStorage.getItem("MainWindow");
    isOpen = JSON.parse(items!).isOpen;
    position = JSON.parse(items!).position;
  } else {
    isOpen = true;
    position = {
      x: innerWidth / 2 - ((innerWidth / 6) * 3) / 2,
      y: innerHeight / 2 - ((innerHeight / 5) * 3) / 2,
    };
  }

  return {
    isOpen,
    position,
  };
}

//prettier-ignore
export function changeWindowState(windowName: string, isOpen: boolean, position: Position, setIsOpen: (value: React.SetStateAction<boolean>) => void) {
  const values = { isOpen: isOpen, position: position };
  localStorage.setItem(windowName, JSON.stringify(values));
  
  setIsOpen(isOpen);
}
