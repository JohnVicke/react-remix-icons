import React from "react";
import { Icon, IconProps } from "../Icon";

export type ParkingFillProps = Omit<IconProps, "name">;

export const ParkingFill = (props: ParkingFillProps) => (
  <Icon name="parking-fill" {...props} />
);
