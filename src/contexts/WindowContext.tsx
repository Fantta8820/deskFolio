import { createContext, useContext, useState } from "react";
import { setLocalStorageValues } from "../utils/WindowFuncs";

const WindowContext = createContext<
  | {
      isOpen: boolean;
      setIsOpen: (value: React.SetStateAction<boolean>) => void;
    }
  | undefined
>(undefined);

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const items = setLocalStorageValues();

  const [isOpen, setIsOpen] = useState(items.isOpen);

  return (
    <WindowContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </WindowContext.Provider>
  );
}

export function useOpenHooks(){
    const context = useContext(WindowContext)
    if(!context){
        throw new Error("This isn't inside a WindowProvider");
    }

    return context;
}
