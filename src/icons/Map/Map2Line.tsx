import React from "react";
import { Icon, IconProps } from "../Icon";

export type Map2LineProps = Omit<IconProps, "name">;

export const Map2Line = (props: Map2LineProps) => (
  <Icon name="map-2-line" {...props} />
);
