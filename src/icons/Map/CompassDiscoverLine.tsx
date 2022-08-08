import React from "react";
import { Icon, IconProps } from "../Icon";

export type CompassDiscoverLineProps = Omit<IconProps, "name">;

export const CompassDiscoverLine = (props: CompassDiscoverLineProps) => (
  <Icon name="compass-discover-line" {...props} />
);
