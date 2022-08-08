import React from "react";
import { Icon, IconProps } from "../Icon";

export type ParkingBoxLineProps = Omit<IconProps, "name">;

export const ParkingBoxLine = (props: ParkingBoxLineProps) => (
  <Icon name="parking-box-line" {...props} />
);
