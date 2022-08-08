import React from "react";
import { Icon, IconProps } from "../Icon";

export type TruckLineProps = Omit<IconProps, "name">;

export const TruckLine = (props: TruckLineProps) => (
  <Icon name="truck-line" {...props} />
);
