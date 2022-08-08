import React from "react";
import { Icon, IconProps } from "../Icon";

export type BusWifiFillProps = Omit<IconProps, "name">;

export const BusWifiFill = (props: BusWifiFillProps) => (
  <Icon name="bus-wifi-fill" {...props} />
);
