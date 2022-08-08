import React from "react";
import { Icon, IconProps } from "../Icon";

export type MapPinUserFillProps = Omit<IconProps, "name">;

export const MapPinUserFill = (props: MapPinUserFillProps) => (
  <Icon name="map-pin-user-fill" {...props} />
);
