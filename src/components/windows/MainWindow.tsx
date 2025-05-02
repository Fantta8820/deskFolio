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
      className="w-2/4 h-3/5 bg-gray-500 m-0 select-none"
      style={{ position: "absolute", left: position.x, top: position.y }}
      ref={windowRef}
    >
      <nav
        className="w-full h-8 bg-gray-700 absolute flex items-center justify-center"
        onMouseDown={mouseDown}
      >
        <h1 className="text-center text-white">Bem Vindo</h1>
      </nav>
      <section className="flex justify-center items-center w-full h-full">
        <h1 className="text-white text-9xl font-JosefinSans_Bold">
          Hello World!
        </h1>
      </section>
    </main>
  );
}

export default Window;
