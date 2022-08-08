import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileChart2LineProps = Omit<IconProps, "name">;

export const FileChart2Line = (props: FileChart2LineProps) => (
  <Icon name="file-chart-2-line" {...props} />
);
