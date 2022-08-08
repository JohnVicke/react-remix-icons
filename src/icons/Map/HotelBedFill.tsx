import React from "react";
import { Icon, IconProps } from "../Icon";

export type HotelBedFillProps = Omit<IconProps, "name">;

export const HotelBedFill = (props: HotelBedFillProps) => (
  <Icon name="hotel-bed-fill" {...props} />
);
