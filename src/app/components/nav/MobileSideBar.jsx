import Image from "next/image";
import { navigation } from "../../../contexts/store";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MobileSideBar = () => {
  const { setSideBar, SideBar, currPage, setPage, Tabs } = navigation();
  const handleClick = (tab) => {
    setPage(tab);
    if (window.innerWidth <= 800) {
      setSideBar(false);
    }
  };
  return (
    <div className="MobileSideBar">
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
      <div className="flex justify-start items-start flex-col flex-grow w-full gap-1">
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
            onClick={() => handleClick(tab.key)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div>CopyRights</div>
    </div>
  );
};

export default MobileSideBar;
