//prettier-ignore
import { HandleMouseMovementParams, handleMovementDown } from "./../types/drag.types";

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
