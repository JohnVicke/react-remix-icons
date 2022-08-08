import React from "react";
import { Icon, IconProps } from "../Icon";

export type SubwayWifiFillProps = Omit<IconProps, "name">;

export const SubwayWifiFill = (props: SubwayWifiFillProps) => (
  <Icon name="subway-wifi-fill" {...props} />
);
