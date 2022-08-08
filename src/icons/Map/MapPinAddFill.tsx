import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPinAddFillProps = Omit<IconProps, "name">;

export const MapPinAddFill = (props: MapPinAddFillProps) => (
  <Icon name="map-pin-add-fill" {...props} />
);
