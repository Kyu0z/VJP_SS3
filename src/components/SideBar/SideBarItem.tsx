import React from "react";
import { SideBarItemProps } from "./types";

export default function SideBarItem(props: SideBarItemProps) {
  const { name, icon } = props;
  return <div className="side-bar-items">{name}</div>;
}
