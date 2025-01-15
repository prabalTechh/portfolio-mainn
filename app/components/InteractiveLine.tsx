"use client";

import Image from "next/image";
import { useState } from "react";

interface LineData {
  text: string;
  tagName: string | null;
}

interface InteractiveLineProps {
  lineData: LineData;
  index: number;
}

const InteractiveLine: React.FC<InteractiveLineProps> = ({
  lineData,
  index,
}) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("URL copied to clipboard!");
    });
  };

  const handleMouseEnter = () => {
    if (timer) clearTimeout(timer); // Clear any previous timeout when mouse enters
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setTooltipVisible(false);
    }, 1000); // Tooltip disappears after 5 seconds
    setTimer(timeout);
  };

  return (
    <div key={index} className="flex gap-3 relative group">
      <span className="text-gray-400">{index}</span>
      {lineData.tagName ? (
        <span>
          {lineData.text.split(lineData.tagName).map((part, i) => (
            <span key={i} className="text-[#d8dae0]">
              {i > 0 && (
                <span className="text-[#e86fae]">{lineData.tagName}</span>
              )}
              {part}
            </span>
          ))}
        </span>
      ) : lineData.text.includes("http") ? (
        <span
          className="text-[#78ccf4] underline cursor-pointer relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {lineData.text}
          {/* Tooltip with Copy URL */}
          {tooltipVisible && (
            <div className="absolute left-40 bottom-full mb-2 bg-[#22333C] text-white p-4  flex items-center flex-col gap-2 rounded-3xl shadow-lg">
              <div>
                <Image src={"/user.png"} alt={""} width={272} height={264} />
              </div>
              <div className="text-xs pt-2">{lineData.text}</div>
              <div className="flex gap-2  justify-end">
                <button
                  onClick={() => {
                    const startIdx = lineData.text.indexOf('href="') + 6;
                    const endIdx = lineData.text.indexOf('"', startIdx);
                    const url = lineData.text.substring(startIdx, endIdx);
                    copyToClipboard(url);
                  }}
                  className="mt-2 bg-[#78ccf4] text-black px-2 py-1 rounded hover:bg-[#5ba9d1]"
                >
                  Copy URL
                </button>
                <button
                  onClick={() => {
                    const startIdx = lineData.text.indexOf('href="') + 6;
                    const endIdx = lineData.text.indexOf('"', startIdx);
                    const url = lineData.text.substring(startIdx, endIdx);
                    console.log(url);
                  }}
                  className="mt-2 bg-[#78ccf4] text-black px-2 py-1 rounded hover:bg-[#5ba9d1]"
                >
                  Open
                </button>
              </div>
            </div>
          )}
        </span>
      ) : (
        <span className="text-[#d8dae0] text-sm">{lineData.text}</span>
      )}
    </div>
  );
};

export default InteractiveLine;
