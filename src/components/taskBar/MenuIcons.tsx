import { Icon } from "@iconify/react/dist/iconify.js";
import { Position } from "../../types/drag.types";
import { changeWindowState } from "../../utils/WindowFuncs";
import { useOpenHooks } from "../../contexts/WindowContext";

function MenuIcons(props: { icon: string; title: string, windowName: string, isOpen: boolean, position: Position }) {
  const { setIsOpen } = useOpenHooks();  

  return (
    <main className="w-1/4 flex flex-col justify-center items-center">
      <button className="text-white text-4xl" onClick={() => changeWindowState(props.windowName, props.isOpen, props.position, setIsOpen)}>
        <Icon icon={props.icon} />
      </button>
      <p className={`text-white text-center text-sm line-clamp-2 w-16 pt-2`}>
        {props.title}
      </p>
    </main>
  );
}

export default MenuIcons;
