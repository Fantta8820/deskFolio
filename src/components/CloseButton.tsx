import { Icon } from "@iconify/react/dist/iconify.js";
import { changeWindowState } from "../utils/WindowFuncs";
import { Position } from "../types/drag.types";
import { useOpenHooks } from "../contexts/WindowContext";

function CloseButton(props: {windowName: string, isOpen: boolean, position: Position}) {  
  const { setIsOpen } = useOpenHooks();  

  return (
    <button className="absolute text-red-300 right-5 text-xl top-4" onClick={() => changeWindowState(props.windowName, props.isOpen, props.position, setIsOpen)}>
      <Icon icon="mdi:circle" />
    </button>
  );
}

export default CloseButton;
