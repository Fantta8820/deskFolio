import { MouseEventHandler, useEffect } from "react";
//prettier-ignore
import { handleMouseDown, handleMouseMovement, handleMouseUp } from "../../utils/WindowFuncs";
import { useDraggableHooks } from "../../hooks/useDraggableHooks";

function Window() {
  //prettier-ignore
  const {windowRef, isDragging, setIsDragging, position, setPosition, offSet, setOffSet} = useDraggableHooks();

  useEffect(() => {
    setPosition({
      x: innerWidth / 2 - windowRef.current!.offsetWidth / 2,
      y: innerHeight / 2 - windowRef.current!.offsetHeight / 2,
    });
  }, []);

  useEffect(() => {
    const mouseMovement = (e: MouseEvent) => {
      handleMouseMovement({ e, isDragging, offSet, windowRef, setPosition });
    };

    const mouseUp = () => {
      handleMouseUp(setIsDragging);
    };

    window.addEventListener("mousemove", mouseMovement);
    window.addEventListener("mouseup", mouseUp);
    window.addEventListener("blur", mouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMovement);
      window.removeEventListener("mouseup", mouseUp);
      window.removeEventListener("blur", mouseUp);
    };
  }, [isDragging, offSet]);

  const mouseDown: MouseEventHandler = (e) => {
    handleMouseDown({ e, windowRef, setOffSet, setIsDragging });
  };

  return (
    <main
      className="w-72 h-40 bg-stone-400
      "
      style={{ position: "absolute", left: position.x, top: position.y }}
      ref={windowRef}
    >
      <div className="bg-zinc-600 w-full h-6" onMouseDown={mouseDown}></div>
    </main>
  );
}

export default Window;
