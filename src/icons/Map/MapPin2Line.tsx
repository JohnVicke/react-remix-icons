import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPin2LineProps = Omit<IconProps, "name">;

export const MapPin2Line = (props: MapPin2LineProps) => (
  <Icon name="map-pin-2-line" {...props} />
);
