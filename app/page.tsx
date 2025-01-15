import { Button } from "./components/Button";
import { CodeSnippit } from "./components/CodeSnippit";
import { RestComp } from "./components/RestComp";
import SVGComponent from "./svgs/UserProfile";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto p-4 ">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Section */}
        <section className="w-full md:w-1/3">
          <div className="h-full border border-[#5D513F] bg-[#EBE0D6] rounded-3xl">
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
          <div className="h-full bg-[#22333C] border border-[#5D513F] rounded-3xl">
            <div className="flex flex-col gap-2 items-center justify-center h-full">
              <div className="flex w-full justify-end pb-4 pr-20">
                <button className="py-2 px-4 rounded-l-xl  border-2 border-[#3b6089] text-white">
                  <FiMoon />
                </button>
                <button className="py-2 px-4 rounded-r-xl border border-[#2c4d72] text-white">
                  <FiSun />
                </button>
              </div>
              <CodeSnippit />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
