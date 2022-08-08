import React from "react";
import { Icon, IconProps } from "../Icon";

export type ParkingLineProps = Omit<IconProps, "name">;

export const ParkingLine = (props: ParkingLineProps) => (
  <Icon name="parking-line" {...props} />
);
