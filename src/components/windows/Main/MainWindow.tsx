import { MouseEventHandler, useEffect } from "react";
//prettier-ignore
import { handleMouseDown, handleMouseMovement, handleMouseUp } from "../../../utils/WindowFuncs";
import { useDraggableHooks } from "../../../hooks/useDraggableHooks";
import AboutIcons from "./AboutIcons";
import CloseButton from "../../CloseButton";

function Window() {
  //prettier-ignore
  const {windowRef, isDragging, setIsDragging, position, setPosition, offSet, setOffSet, isOpen, setIsOpen} = useDraggableHooks();

  useEffect(() => {
    if (!localStorage.getItem("MainWindow")) {
      //prettier-ignore
      const values: {isOpen: boolean, position: {x: number, y: number}} = {isOpen: false, position: { x: innerWidth / 2 - ((innerWidth / 6) * 3) / 2, y: innerHeight / 2 - ((innerHeight / 5) * 3) / 2 }};

      localStorage.setItem("MainWindow", JSON.stringify(values));      
    }

    const item = localStorage.getItem("MainWindow")
    console.log(isOpen);
    console.log(position);
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
      className="w-3/6 h-3/5 bg-gray-500 m-0 select-none"
      style={{ position: "absolute", left: position.x, top: position.y }}
      ref={windowRef}
    >
      <nav
        className="w-full h-1/12 bg-gray-700 flex items-center justify-center"
        onMouseDown={mouseDown}
      >
        <h1 className="text-center text-white">Bem Vindo</h1>
        <CloseButton />
      </nav>
      <section className="flex flex-col justify-center items-center w-full h-11/12">
        <div className="flex flex-col items-center justify-center absolute top-50">
          <h1 className="text-center text-5xl text-white font-semibold italic">
            Prazer, me chamo <span className="text-red-300">André Victor</span>!
          </h1>
          <p className="text-white font-semibold pt-2 text-xl">
            Desenvolvedor Front-End Júnior
          </p>
        </div>
        <div className="grid grid-cols-5 place-items-center gap-8 absolute bottom-30">
          <AboutIcons icon={"mdi:about"} title={"Sobre"} />
          <AboutIcons icon={"raphael:pc"} title={"deskFolio"} />
          <AboutIcons icon={"ri:links-fill"} title={"Links"} />
          <AboutIcons icon={"mdi:faq"} title={"FAQ"} />
          <AboutIcons
            icon={"material-symbols:contact-support-rounded"}
            title={"Contato"}
          />
        </div>
      </section>
    </main>
  );
}

export default Window;
