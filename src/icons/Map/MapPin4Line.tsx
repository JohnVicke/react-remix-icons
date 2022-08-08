import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPin4LineProps = Omit<IconProps, "name">;

export const MapPin4Line = (props: MapPin4LineProps) => (
  <Icon name="map-pin-4-line" {...props} />
);
