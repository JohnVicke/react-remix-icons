import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderChart2FillProps = Omit<IconProps, "name">;

export const FolderChart2Fill = (props: FolderChart2FillProps) => (
  <Icon name="folder-chart-2-fill" {...props} />
);
