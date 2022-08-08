import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileChartFillProps = Omit<IconProps, "name">;

export const FileChartFill = (props: FileChartFillProps) => (
  <Icon name="file-chart-fill" {...props} />
);
