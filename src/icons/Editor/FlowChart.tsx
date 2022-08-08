import React from "react";
import { Icon, IconProps } from "../Icon";

export type FlowChartProps = Omit<IconProps, "name">;

export const FlowChart = (props: FlowChartProps) => (
  <Icon name="flow-chart" {...props} />
);
