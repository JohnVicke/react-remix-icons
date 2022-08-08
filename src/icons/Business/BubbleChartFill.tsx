import React from "react";
import { Icon, IconProps } from "../Icon";

export type BubbleChartFillProps = Omit<IconProps, "name">;

export const BubbleChartFill = (props: BubbleChartFillProps) => (
  <Icon name="bubble-chart-fill" {...props} />
);
