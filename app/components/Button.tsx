import { ReactElement } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ButtonProps {
  children: ReactElement;
  content: string;
}

export async function Button({ children, content }: ButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="px-4 rounded-xl py-2 bg-[#22333C] border border-[#5D513F] text-white">
            {children}
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-gray-900/30 text-white font-bold">
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
