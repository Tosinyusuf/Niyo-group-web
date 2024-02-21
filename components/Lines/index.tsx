import React, { FC, useState, useEffect } from "react";

interface LineProps {
  children?: React.ReactNode;
}
const Awards = ({ children }: LineProps) => {
  const [lineSpacing, setLineSpacing] = useState(100); // Example spacing in pixels
  const [numHorizontalLines, setNumHorizontalLines] = useState(0);
  const [numVerticalLines, setNumVerticalLines] = useState(0);

  useEffect(() => {
    // Dynamically calculate the number of lines based on viewport size and spacing
    const calculateLines = () => {
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );

      setNumHorizontalLines(Math.floor(vh / lineSpacing));
      setNumVerticalLines(Math.floor(vw / lineSpacing));
    };

    window.addEventListener("resize", calculateLines);
    calculateLines(); // Initial calculation

    return () => window.removeEventListener("resize", calculateLines);
  }, [lineSpacing]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Generate horizontal lines */}
      {Array.from({ length: numHorizontalLines }).map((_, idx) => (
        <div
          key={`h-line-${idx}`}
          className="absolute left-0 w-full h-[1px] bg-white opacity-5"
          style={{ top: `${idx * lineSpacing}px` }}
        />
      ))}

      {/* Generate vertical lines */}
      {Array.from({ length: numVerticalLines }).map((_, idx) => (
        <div
          key={`v-line-${idx}`}
          className="absolute top-0 h-full w-[1px] bg-white opacity-5"
          style={{ left: `${idx * lineSpacing}px` }}
        />
      ))}

      <div className="z-10 relative">{children}</div>
    </div>
  );
};

export default Awards;
