import React from "react";
import { Icon, IconProps } from "../Icon";

export type PoliceCarFillProps = Omit<IconProps, "name">;

export const PoliceCarFill = (props: PoliceCarFillProps) => (
  <Icon name="police-car-fill" {...props} />
);
