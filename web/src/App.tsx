import { useCallback, useState } from "react";
import { Renderer } from "./components/Renderer/Renderer";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    undefined
  );

  const onColorChange = useCallback((newColor: string) => {
    setSelectedColor(newColor);
  }, []);

  return (
    <div className="flex justify-start h-full w-full">
      <Sidebar changeColor={onColorChange} />
      <Renderer selectedColor={selectedColor} />
    </div>
  );
}

export default App;
