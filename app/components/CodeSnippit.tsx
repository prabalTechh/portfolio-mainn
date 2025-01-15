import { PiDotsThreeOutlineFill } from "react-icons/pi";
import fs from "fs/promises";
import path from "path";
import InteractiveLine from "./InteractiveLine";
interface LineData {
    text: string;
    tagName: string | null;
  }

export async function CodeSnippit(){
    let fileContent: string[] = [];
      let dataArr: LineData[] = [];
    
      try {
        const filePath = path.resolve("./text.txt");
        const content = await fs.readFile(filePath, "utf8");
    
        fileContent = content.split("\n");
    
        // Process each line and extract tag names
        dataArr = fileContent.map((line) => {
          const trimmedLine = line.trim();
          let tagName = null;
    
          if (trimmedLine.startsWith("<")) {
            // Extract the tag name using regex
            const match = trimmedLine.match(/<\/?([a-zA-Z0-9]+)/);
            if (match) {
              tagName = match[1]; // Get the captured tag name
            }
          }
          return { text: line, tagName };
        });
      } catch (error) {
        console.error("Error reading file:", error);
        dataArr = [
          {
            text: "Error: Unable to load file content.",
            tagName: null,
          },
        ];
      }
    return <div className="max-w-screen-sm w-full border-2 border-[#1e344c] text-xs pb-3 bg-[#18293D] rounded-lg overflow-hidden ">
    <div className="border border-[#1e344c]  flex items-center ">
      <h3 className="text-3xl text-gray-400 pl-2 flex">
      <PiDotsThreeOutlineFill />
      </h3>
    </div>
    <div className="px-6 py-6 max-h-[65vh] overflow-y-scroll hide-scrollbar rounded-lg shadow-lg  bg-[#18293D]">
      <div className="h-full hide-scrollbar">
        <pre className="whitespace-pre-wrap text-[#d8dae0] text-sm ">
          {dataArr.map((lineData, index) => (
            <InteractiveLine
              key={index}
              lineData={lineData}
              index={index}
            />
          ))}
        </pre>
      </div>
    </div>
  </div>
}