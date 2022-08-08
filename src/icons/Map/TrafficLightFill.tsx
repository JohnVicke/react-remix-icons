import React from "react";
import { Icon, IconProps } from "../Icon";

export type TrafficLightFillProps = Omit<IconProps, "name">;

export const TrafficLightFill = (props: TrafficLightFillProps) => (
  <Icon name="traffic-light-fill" {...props} />
);
