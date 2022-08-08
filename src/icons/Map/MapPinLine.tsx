import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPinLineProps = Omit<IconProps, "name">;

export const MapPinLine = (props: MapPinLineProps) => (
  <Icon name="map-pin-line" {...props} />
);
