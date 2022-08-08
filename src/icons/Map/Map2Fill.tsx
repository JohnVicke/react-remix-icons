import React from "react";
import { Icon, IconProps } from "../Icon";

export type Map2FillProps = Omit<IconProps, "name">;

export const Map2Fill = (props: Map2FillProps) => (
  <Icon name="map-2-fill" {...props} />
);
