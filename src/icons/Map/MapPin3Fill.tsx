import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPin3FillProps = Omit<IconProps, "name">;

export const MapPin3Fill = (props: MapPin3FillProps) => (
  <Icon name="map-pin-3-fill" {...props} />
);
