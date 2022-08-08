import React from "react";
import { Icon, IconProps } from "../Icon";

export type HotelBedLineProps = Omit<IconProps, "name">;

export const HotelBedLine = (props: HotelBedLineProps) => (
  <Icon name="hotel-bed-line" {...props} />
);
