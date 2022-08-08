import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPinRangeLineProps = Omit<IconProps, "name">;

export const MapPinRangeLine = (props: MapPinRangeLineProps) => (
  <Icon name="map-pin-range-line" {...props} />
);
