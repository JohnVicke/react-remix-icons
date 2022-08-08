import React from "react";
import { Icon, IconProps } from "../Icon";

export type TruckFillProps = Omit<IconProps, "name">;

export const TruckFill = (props: TruckFillProps) => (
  <Icon name="truck-fill" {...props} />
);
