import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChinaRailwayFillProps = Omit<IconProps, "name">;

export const ChinaRailwayFill = (props: ChinaRailwayFillProps) => (
  <Icon name="china-railway-fill" {...props} />
);
