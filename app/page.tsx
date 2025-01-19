import { Button } from "./components/Button";
import { CodeSnippit } from "./components/CodeSnippit";
import { RestComp } from "./components/RestComp";
import SVGComponent from "./svgs/UserProfile";
import { FiMoon, FiSun } from "react-icons/fi";
import clsx from "clsx";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <main className={clsx("min-h-screen dark:bg-[#353536] min-w-full mx-auto p-4")}>
      <div className={clsx("max-w-screen-xl mx-auto")}>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Section */}
        <section className="w-full md:w-1/3">
          <div className={clsx(
            "h-full border rounded-3xl",
            "border-[#5D513F] bg-[#EBE0D6]",
            "dark:bg-[#647A67] dark:border-[#22333C]"
          )}>
            <div className="flex flex-col items-center h-full pt-4">
              <SVGComponent />
              <div className="h-full w-full mt-4">
                <RestComp />
              </div>
            </div>
          </div>
        </section>

        {/* Code Section */}
        <section className="w-full md:w-2/3">
          <div className={clsx(
            "h-full rounded-3xl border",
            "bg-[#22333C] border-[#5D513F]",
            "dark:border-gray-700"
          )}>
            <div className="flex flex-col gap-2 items-center justify-center h-full">
              <div className="flex w-full justify-end pb-4 pr-20">
                <ThemeToggle />
              </div>
              <CodeSnippit />
            </div>
          </div>
        </section>
      </div>
      </div>
    </main>
  );
}