import React from "react";
import { SideBarProps } from "./types";
import SideBarItem from "./SideBarItem";

export default function SideBar(props: SideBarProps) {
  return (
    <div className="side-bar-container">
      <SideBarItem id={0} name="Test1" icon="" />
    </div>
  );
}
