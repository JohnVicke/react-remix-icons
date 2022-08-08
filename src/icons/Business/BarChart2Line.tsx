import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarChart2LineProps = Omit<IconProps, "name">;

export const BarChart2Line = (props: BarChart2LineProps) => (
  <Icon name="bar-chart-2-line" {...props} />
);
