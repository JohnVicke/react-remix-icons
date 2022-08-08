import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPin3LineProps = Omit<IconProps, "name">;

export const MapPin3Line = (props: MapPin3LineProps) => (
  <Icon name="map-pin-3-line" {...props} />
);
