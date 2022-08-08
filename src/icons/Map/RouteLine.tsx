import React from "react";
import { Icon, IconProps } from "../Icon";

export type RouteLineProps = Omit<IconProps, "name">;

export const RouteLine = (props: RouteLineProps) => (
  <Icon name="route-line" {...props} />
);
