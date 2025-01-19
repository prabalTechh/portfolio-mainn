import { ReactElement } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ButtonProps {
  children?: ReactElement | String;
  content: string;
  clsname?: string;
}

export async function Button({ children, content , clsname }: ButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className={`px-4 rounded-xl py-2 bg-[#22333C] dark:bg-[#B55629] border border-[#5D513F] dark:border-[#22333C] text-white dark:text-[#fafafa]` + clsname}>
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
