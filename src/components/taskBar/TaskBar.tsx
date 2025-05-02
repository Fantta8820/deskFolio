import { Icon } from "@iconify/react";
import Hours from "./Hours";
import StartupButton from "./StartupButton";

function TaskBar() {
  return (
    <main className="w-full h-10 bg-gray-700 bottom-0 absolute">
      <section className="w-full h-full flex items-center pr-4">
        <div className="flex justify-center items-center h-full w-full">
          <StartupButton />
        </div>
        <div className="flex items-center right-0 pr-2 absolute gap-2">
          <Icon icon="tdesign:sound-filled" className="text-white text-xl" />
          <Icon icon="material-symbols:wifi" className="text-white text-xl" />
          <Hours />
        </div>
      </section>
    </main>
  );
}

export default TaskBar;
