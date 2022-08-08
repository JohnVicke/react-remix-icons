import React from "react";
import { Icon, IconProps } from "../Icon";

export type PieChart2LineProps = Omit<IconProps, "name">;

export const PieChart2Line = (props: PieChart2LineProps) => (
  <Icon name="pie-chart-2-line" {...props} />
);
