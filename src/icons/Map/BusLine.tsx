import React from "react";
import { Icon, IconProps } from "../Icon";

export type BusLineProps = Omit<IconProps, "name">;

export const BusLine = (props: BusLineProps) => (
  <Icon name="bus-line" {...props} />
);
