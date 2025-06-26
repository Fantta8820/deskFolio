import { MouseEventHandler, useEffect } from "react";
import CloseButton from "../../CloseButton";
//prettier-ignore
import { changeWindowState, handleMouseDown, handleMouseMovement, handleMouseUp } from "../../../utils/WindowFuncs";
import { useDraggableHooks } from "../../../hooks/useDraggableHooks";
import { useOpenHooks } from "../../../contexts/WindowContext";

function About() {
  //prettier-ignore
  const { windowRef, isDragging, setIsDragging, position, setPosition, offSet, setOffSet } = useDraggableHooks();
  const { isOpen, setIsOpen } = useOpenHooks();

  useEffect(() => {
    if (!localStorage.getItem("About")) {
      //prettier-ignore
      const values: {isOpen: boolean, position: {x: number, y: number}} = {isOpen: true, position: { x: innerWidth / 2 - ((innerWidth / 6) * 3) / 2, y: innerHeight / 2 - ((innerHeight / 5) * 3) / 2 }};

      localStorage.setItem("About", JSON.stringify(values));
    }
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

    changeWindowState("MainWindow", isOpen, position, setIsOpen);

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
      className={`w-3/6 h-3/5 bg-gray-500 m-0 select-none`}
      style={{ position: "absolute", left: position.x, top: position.y }}
      ref={windowRef}
    >
      <nav
        className="w-full h-1/12 bg-gray-700 flex items-center justify-center"
        onMouseDown={mouseDown}
      >
        <h1 className="text-center text-white">Bem Vindo</h1>
      </nav>
      <CloseButton windowName="About" isOpen={false} position={position} />
      <section className="flex flex-col justify-center items-center w-full h-11/12">                
      </section>
    </main>
  );
}

export default About;
