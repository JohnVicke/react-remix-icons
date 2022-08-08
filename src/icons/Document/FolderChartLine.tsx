import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderChartLineProps = Omit<IconProps, "name">;

export const FolderChartLine = (props: FolderChartLineProps) => (
  <Icon name="folder-chart-line" {...props} />
);
