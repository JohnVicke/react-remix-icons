import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPinFillProps = Omit<IconProps, "name">;

export const MapPinFill = (props: MapPinFillProps) => (
  <Icon name="map-pin-fill" {...props} />
);
