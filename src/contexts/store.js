import { AiFillMail } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { VscLocation } from "react-icons/vsc";
import { create } from "zustand";

export const navigation = create((set) => ({
  SideBar: false,
  setSideBar: (value) =>
    set({
      SideBar: value,
    }),
  currPage: "home",
  setPage: (value) =>
    set({
      currPage: value,
    }),
  Tabs: [
    { title: "Home", key: "home" },
    { title: "Skills", key: "skills" },
    { title: "Projects", key: "projects" },
    { title: "Contact Me", key: "contact" },
  ],
}));

export const CardInfo = create((set) => ({
  Info: [
    { title: "E-mail", info: "Devrajtomar120@gmail.com", icon: <AiFillMail /> },
    {
      title: "Collage",
      info: "Barkatullah Univercity, Bhopal, MadhyaPradesh",
      icon: <HiOutlineAcademicCap />,
    },
    {
      title: "Address",
      info: "Bhopal,MadhyaPradesh, India",
      icon: <VscLocation />,
    },
  ],
}));
