import React from "react";
import { Icon, IconProps } from "../Icon";

export type PoliceCarLineProps = Omit<IconProps, "name">;

export const PoliceCarLine = (props: PoliceCarLineProps) => (
  <Icon name="police-car-line" {...props} />
);
