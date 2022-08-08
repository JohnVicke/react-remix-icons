import React from "react";
import { Icon, IconProps } from "../Icon";

export type BubbleChartLineProps = Omit<IconProps, "name">;

export const BubbleChartLine = (props: BubbleChartLineProps) => (
  <Icon name="bubble-chart-line" {...props} />
);
