import React from "react";
import { Icon, IconProps } from "../Icon";

export type RouteFillProps = Omit<IconProps, "name">;

export const RouteFill = (props: RouteFillProps) => (
  <Icon name="route-fill" {...props} />
);
