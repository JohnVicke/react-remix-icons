import React from "react";
import { Icon, IconProps } from "../Icon";

export type ParkingBoxFillProps = Omit<IconProps, "name">;

export const ParkingBoxFill = (props: ParkingBoxFillProps) => (
  <Icon name="parking-box-fill" {...props} />
);
