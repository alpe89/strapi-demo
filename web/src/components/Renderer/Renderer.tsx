import { useEffect, useRef } from "react";
import { Color } from "three";
import { renderCube } from "../../utils/renderCube";

type RendererProps = {
  selectedColor?: string;
};

export function Renderer({ selectedColor = "00ff00" }: RendererProps) {
  const cube = useRef<THREE.Mesh<
    THREE.BoxGeometry,
    THREE.MeshBasicMaterial
  > | null>(null);

  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cube.current) {
      console.log(cube.current);
      cube.current.material.color = new Color(`#${selectedColor}`);
    }
  }, [cube.current, selectedColor]);

  useEffect(() => {
    if (!root.current) {
      return;
    }
    cube.current = renderCube(root.current);
  }, []);

  return <main className="p-2 w-full" ref={root} />;
}
