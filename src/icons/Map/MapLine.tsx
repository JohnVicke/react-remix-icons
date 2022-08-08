import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapLineProps = Omit<IconProps, "name">;

export const MapLine = (props: MapLineProps) => (
  <Icon name="map-line" {...props} />
);
