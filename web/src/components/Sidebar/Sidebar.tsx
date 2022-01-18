import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { ColorsResponse } from "../../types/ColorsResponse";

type SidebarProps = {
  changeColor: (value: string) => void;
};

export function Sidebar({ changeColor }: SidebarProps) {
  const [colors, setColors] = useState<string[]>([]);
  const onSelectHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    changeColor(e.target.value);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:1337/colors");
      const json: ColorsResponse[] = await response.json();

      setColors(json.map((color) => color.value));
    };

    fetchData();
  }, []);

  return (
    <aside className="bg-red-500 w-1/4 h-full p-2 flex justify-center items-center flex-col">
      <h1 className="mb-5 font-mono font-bold">Selezione Colore</h1>
      <select
        className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-red-900 focus:outline-none"
        aria-label="Default select example"
        onChange={onSelectHandler}
      >
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </aside>
  );
}
