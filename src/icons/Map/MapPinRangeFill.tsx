import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPinRangeFillProps = Omit<IconProps, "name">;

export const MapPinRangeFill = (props: MapPinRangeFillProps) => (
  <Icon name="map-pin-range-fill" {...props} />
);
