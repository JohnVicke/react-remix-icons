import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPinUserLineProps = Omit<IconProps, "name">;

export const MapPinUserLine = (props: MapPinUserLineProps) => (
  <Icon name="map-pin-user-line" {...props} />
);
