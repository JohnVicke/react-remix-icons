import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPin4FillProps = Omit<IconProps, "name">;

export const MapPin4Fill = (props: MapPin4FillProps) => (
  <Icon name="map-pin-4-fill" {...props} />
);
