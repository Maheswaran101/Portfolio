import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function HeroCanvas({ id = "tsparticles" }: { id?: string }) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id={id}
      particlesLoaded={async () => {}}
      // @ts-expect-error legacy prop
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 150, links: { opacity: 0.4 } },
            push: { quantity: 2 },
          },
        },
        particles: {
          color: { value: ["#00d4ff", "#a855f7", "#ffffff"] },
          links: { color: "#00d4ff", distance: 140, enable: true, opacity: 0.12, width: 1 },
          move: { direction: "none", enable: true, outModes: { default: "bounce" }, speed: 0.7, random: true },
          number: { density: { enable: true }, value: 80 },
          opacity: { value: { min: 0.15, max: 0.6 } },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2.5 } },
        },
        detectRetina: true,
      }}
    />
  );
}
