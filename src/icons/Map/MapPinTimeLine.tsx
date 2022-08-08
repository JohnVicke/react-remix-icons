import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPinTimeLineProps = Omit<IconProps, "name">;

export const MapPinTimeLine = (props: MapPinTimeLineProps) => (
  <Icon name="map-pin-time-line" {...props} />
);
