import { ChangeEvent, useCallback } from "react";

type SidebarProps = {
  changeColor: (value: string) => void;
};

const colors = ["ff0000", "00ff00", "0000ff"];

export function Sidebar({ changeColor }: SidebarProps) {
  const onSelectHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    changeColor(e.target.value);
  }, []);

  return (
    <aside className="bg-red-500 w-1/4 p-2">
      <h1>Selezione Colore</h1>
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
