import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPin2FillProps = Omit<IconProps, "name">;

export const MapPin2Fill = (props: MapPin2FillProps) => (
  <Icon name="map-pin-2-fill" {...props} />
);
