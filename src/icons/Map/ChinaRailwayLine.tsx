import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChinaRailwayLineProps = Omit<IconProps, "name">;

export const ChinaRailwayLine = (props: ChinaRailwayLineProps) => (
  <Icon name="china-railway-line" {...props} />
);
