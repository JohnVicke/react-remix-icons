import React from "react";
import { Icon, IconProps } from "../Icon";

export type PieChart2FillProps = Omit<IconProps, "name">;

export const PieChart2Fill = (props: PieChart2FillProps) => (
  <Icon name="pie-chart-2-fill" {...props} />
);
