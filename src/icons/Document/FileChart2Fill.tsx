import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileChart2FillProps = Omit<IconProps, "name">;

export const FileChart2Fill = (props: FileChart2FillProps) => (
  <Icon name="file-chart-2-fill" {...props} />
);
