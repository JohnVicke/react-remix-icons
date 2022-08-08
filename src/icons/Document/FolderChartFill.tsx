import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderChartFillProps = Omit<IconProps, "name">;

export const FolderChartFill = (props: FolderChartFillProps) => (
  <Icon name="folder-chart-fill" {...props} />
);
