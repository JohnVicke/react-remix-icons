import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPin5FillProps = Omit<IconProps, "name">;

export const MapPin5Fill = (props: MapPin5FillProps) => (
  <Icon name="map-pin-5-fill" {...props} />
);
