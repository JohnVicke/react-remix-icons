import React from "react";
import { Icon, IconProps } from "../Icon";

export type CompassDiscoverFillProps = Omit<IconProps, "name">;

export const CompassDiscoverFill = (props: CompassDiscoverFillProps) => (
  <Icon name="compass-discover-fill" {...props} />
);
