import React from "react";
import { Icon, IconProps } from "../Icon";

export type HotelLineProps = Omit<IconProps, "name">;

export const HotelLine = (props: HotelLineProps) => (
  <Icon name="hotel-line" {...props} />
);
