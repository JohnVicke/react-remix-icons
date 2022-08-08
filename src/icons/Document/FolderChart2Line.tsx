import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderChart2LineProps = Omit<IconProps, "name">;

export const FolderChart2Line = (props: FolderChart2LineProps) => (
  <Icon name="folder-chart-2-line" {...props} />
);
