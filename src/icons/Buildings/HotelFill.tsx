import React from "react";
import { Icon, IconProps } from "../Icon";

export type HotelFillProps = Omit<IconProps, "name">;

export const HotelFill = (props: HotelFillProps) => (
  <Icon name="hotel-fill" {...props} />
);
