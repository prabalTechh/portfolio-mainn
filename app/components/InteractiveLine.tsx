"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("URL copied to clipboard!");
    });
  };

  const handleTooltipToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setTooltipVisible(!tooltipVisible);
  };

  // Close tooltip when clicking outside
  const handleClickOutside = () => {
    if (tooltipVisible) {
      setTooltipVisible(false);
    }
  };

  // Add event listener for clicking outside
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [tooltipVisible]);

  return (
    <div className="flex gap-3 relative group py-1">
      <span className="text-gray-400 min-w-[24px] text-right">{index}</span>
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
        <div className="relative">
          <span
            className=" text-[#78ccf4] text-base underline cursor-pointer"
            onClick={handleTooltipToggle}
          >
            {lineData.text}
          </span>
          {tooltipVisible && (
            <div className="absolute left-40 bottom-full mt-2 bg-[#1a2630] border border-[#2a3844] text-white rounded-lg shadow-xl z-50 w-[280px]">
              <div className="p-4 space-y-3">
                <div className="relative w-full h-48">
                  <Image
                    src="/user.png"
                    alt=""
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="text-sm text-gray-300 break-all">
                  {lineData.text}
                </div>
                <div className="flex gap-2 justify-end pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const startIdx = lineData.text.indexOf('href="') + 6;
                      const endIdx = lineData.text.indexOf('"', startIdx);
                      const url = lineData.text.substring(startIdx, endIdx);
                      copyToClipboard(url);
                    }}
                    className="bg-[#78ccf4] text-black px-3 py-1.5 rounded-md text-sm font-medium hover:bg-[#5ba9d1] transition-colors"
                  >
                    Copy URL
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const startIdx = lineData.text.indexOf('href="') + 6;
                      const endIdx = lineData.text.indexOf('"', startIdx);
                      const url = lineData.text.substring(startIdx, endIdx);
                      window.open(url, "_blank");
                    }}
                    className="bg-[#78ccf4] text-black px-3 py-1.5 rounded-md text-sm font-medium hover:bg-[#5ba9d1] transition-colors"
                  >
                    Open
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <span className="text-[#d8dae0] text-sm">{lineData.text}</span>
      )}
    </div>
  );
};

export default InteractiveLine;
