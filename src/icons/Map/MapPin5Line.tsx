import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPin5LineProps = Omit<IconProps, "name">;

export const MapPin5Line = (props: MapPin5LineProps) => (
  <Icon name="map-pin-5-line" {...props} />
);
