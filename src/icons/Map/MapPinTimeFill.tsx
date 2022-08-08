import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPinTimeFillProps = Omit<IconProps, "name">;

export const MapPinTimeFill = (props: MapPinTimeFillProps) => (
  <Icon name="map-pin-time-fill" {...props} />
);
