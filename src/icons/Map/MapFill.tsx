import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapFillProps = Omit<IconProps, "name">;

export const MapFill = (props: MapFillProps) => (
  <Icon name="map-fill" {...props} />
);
