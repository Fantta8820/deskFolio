import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";
import StartupMenu from "./StartupMenu";
import { useOpenHooks } from "../../contexts/WindowContext";
import { useEffect, useRef } from "react";

function StartupButton() {
  const { showMenu, setShowMenu } = useOpenHooks();

  const menu = useRef<HTMLDivElement | null>(null);
  const button = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      //prettier-ignore
      if (showMenu && menu.current && button.current && e.target instanceof Node && !menu.current.contains(e.target) && !button.current.contains(e.target)){        
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [showMenu]);

  return (
    <main className="w-full h-full flex justify-center items-center">
      <div className="w-full flex justify-center items-center" ref={menu}>{showMenu && <StartupMenu />}</div>
      <button
        className="w-5 absolute flex justify-center items-center"
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu(!showMenu);
        }}
        ref={button}
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <Icon icon="subway:menu" className="text-white text-xl" />
        </motion.div>
      </button>
    </main>
  );
}

export default StartupButton;
