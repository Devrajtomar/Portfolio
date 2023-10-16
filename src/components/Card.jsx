import { CardInfo } from "@/contexts/store";
import axios from "axios";
import React from "react";
import { HiArrowDown, HiUser } from "react-icons/hi2";
import { VscLocation, VscMail } from "react-icons/vsc";
const Card = () => {
  const { Info } = CardInfo();
  // const skill = async () => {
  //   const { data } = await axios.get("/api/skills");
  //   console.log(data);
  // };
  // skill();

  return (
    <div className="Card">
      <div className="w-16 h-16 p-2 rounded-full bg-sky-100 drop-shadow-lg bg-opacity-70">
        <div className="w-full h-full p-2 rounded-full bg-sky-200">
          <div className="w-full h-full p-2 rounded-full bg-sky-300 flex justify-center items-center">
            <HiUser size={20} />
          </div>
        </div>
      </div>
      <div>
        <div className="Heading_1">Devraj Sondhiya</div>
        <div className="Heading_2">Mern Stack Web Developer</div>
      </div>
      <div className="flex justify-start items-center gap-2"></div>
      <div className="flex justify-center items-start flex-col gap-1 w-full ">
        {Info.map((info) => (
          <div
            className="flex justify-center items-center gap-1 w-full"
            key={info.info}
          >
            <div>{info.icon}</div>
            <div className="min-w-[100px]">{info.title}</div>
            <div>:</div>
            <div className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
              {info.info}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
