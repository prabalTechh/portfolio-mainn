import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiCodesandboxLogoDuotone } from "react-icons/pi";
import { Button } from "./Button";
import { IconSet } from "./Icons";
import styles from "../fonts/Home.module.css";
export function RestComp() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className={styles.jomolhari}>PRABAL CHANPURIA</h1>
      <div className="flex flex-col">
        <ul className="flex w-full justify-between px-6 ">
          <li>
            <FaGithub size={32} />
          </li>
          <li>
            <FaLinkedin size={32} />
          </li>
          <li>
            <PiCodesandboxLogoDuotone size={32} />
          </li>
        </ul>
        <div className="flex  items-center justify-center text-center  pl-2">
          <span className={`text-sm  p-2 ${styles["albert-sans"]}`} >github</span>|{" "}
          <span className={`text-sm p-2  ${styles["albert-sans"]}`}>linkedin</span>|
          <span className={`text-sm p-2  ${styles["albert-sans"]}`}>leetCode</span>
        </div>
      </div>
      <span className="px-4 py-2 m-2 shadow rounded-md shadow-[#5D513F]  ">
        <p className={`text-sm ${styles["ibm-plex"]}`} >
          Builds dynamic frontends and scalable backends , integrating modern
          frameworks and Api's Delivers complete high-performance web-solution
        </p>
      </span>
      <div className="grid grid-cols-4 p-2 gap-2">
        <Button content={"HTML"}>
          <IconSet.HTML />
        </Button>
        <Button content={"CSS"}>
          <IconSet.CSS />
        </Button>
        <Button content={"JAVASCRIPT"}>
          <IconSet.JavaScript />
        </Button>
        <Button content={"JAVA"}>
          <IconSet.Java />
        </Button>
        <Button content={"NODEJS"}>
          <IconSet.NodeJS />
        </Button>
        <Button content={"EXPRESSJS"}>
          <IconSet.ExpressJS />
        </Button>
        <Button content={"SOLIDITY"}>
          <IconSet.Solidity />
        </Button>
        <Button content={"REACTJS"}>
          <IconSet.ReactJS />
        </Button>
        <Button content={"NEXTJS"}>
          <IconSet.NextJS />
        </Button>
        <Button content={"TAILWINDCSS"}>
          <IconSet.TailwindCSS />
        </Button>
        <Button content={"API'S"}>
          <IconSet.API />
        </Button>
        <Button content={"WEBSOCKETS"}>
          <IconSet.WebSockets />
        </Button>
        <Button content={"MONGODB"}>
          <IconSet.MongoDB />
        </Button>
        <Button content={"PRESQL"}>
          <IconSet.PreSQL />
        </Button>
        <Button content={"PRISMA"}>
          <IconSet.Prisma />
        </Button>
        <Button content={"GITHUB"}>
          <IconSet.GitHub />
        </Button>
      </div>
      <div className="p-2 border border-gray-400 text-sm ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
        officia dolores porro!
      </div>
    </div>
  );
}
