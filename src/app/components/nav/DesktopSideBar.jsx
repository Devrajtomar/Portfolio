import Image from "next/image";
import { navigation } from "../../../contexts/store";
import { AiOutlineCloseCircle } from "react-icons/ai";

const DesktopSideBar = () => {
  const { setSideBar, SideBar, currPage, setPage, Tabs } = navigation();

  return (
    <div className="DesktopSideBar">
      <div className="FlexBetween">
        <Image
          src="/next.svg"
          alt="next"
          height="60"
          width="60"
          className="Avatar"
        />
        <AiOutlineCloseCircle
          size={40}
          className="Btn self-start"
          onClick={() => setSideBar(!SideBar)}
        />
      </div>
      <div className="flex-grow w-full">
        {Tabs.map((tab) => (
          <div
            key={tab.key}
            className="PageTab"
            style={{
              ...(currPage === tab.key && {
                backgroundColor: "AppWorkspace",
                color: "InfoText",
              }),
            }}
            onClick={() => setPage(tab.key)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div>CopyRight</div>
    </div>
  );
};

export default DesktopSideBar;
