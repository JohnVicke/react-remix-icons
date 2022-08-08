import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileChartLineProps = Omit<IconProps, "name">;

export const FileChartLine = (props: FileChartLineProps) => (
  <Icon name="file-chart-line" {...props} />
);
