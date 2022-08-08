import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPinAddLineProps = Omit<IconProps, "name">;

export const MapPinAddLine = (props: MapPinAddLineProps) => (
  <Icon name="map-pin-add-line" {...props} />
);
