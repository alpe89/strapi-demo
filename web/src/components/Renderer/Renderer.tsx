import { useEffect, useRef } from "react";
import { Cube } from "../../types/Cube";

type RendererProps = {
  selectedColor?: string;
};

export function Renderer({ selectedColor = "00ff00" }: RendererProps) {
  const cube = useRef<Cube | null>(null);
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    import("three").then(({ Color }) => {
      if (cube.current) {
        cube.current.material.color = new Color(`#${selectedColor}`);
      }
    });
  }, [cube.current, selectedColor]);

  useEffect(() => {
    import("../../utils/renderCube").then(({ renderCube }) => {
      if (!root.current) {
        return;
      }
      cube.current = renderCube(root.current);
    });
  }, []);

  return <main className="p-2 w-full" ref={root} />;
}
