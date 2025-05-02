import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";
import StartupMenu from "./StartupMenu";
import { useState } from "react";

function StartupButton() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <main className="w-full h-full flex justify-center items-center">
      {showMenu && <StartupMenu />}
      <button className="w-full absolute flex justify-center items-center" onClick={() => setShowMenu(!showMenu)}>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Icon icon="subway:menu" className="text-white text-xl" />
        </motion.div>
      </button>
    </main>
  );
}

export default StartupButton;
