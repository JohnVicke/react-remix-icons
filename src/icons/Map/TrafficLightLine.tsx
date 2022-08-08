import React from "react";
import { Icon, IconProps } from "../Icon";

export type TrafficLightLineProps = Omit<IconProps, "name">;

export const TrafficLightLine = (props: TrafficLightLineProps) => (
  <Icon name="traffic-light-line" {...props} />
);
