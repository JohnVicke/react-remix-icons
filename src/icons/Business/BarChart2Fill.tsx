import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarChart2FillProps = Omit<IconProps, "name">;

export const BarChart2Fill = (props: BarChart2FillProps) => (
  <Icon name="bar-chart-2-fill" {...props} />
);
