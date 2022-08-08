import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderUnknowLineProps = Omit<IconProps, "name">;

export const FolderUnknowLine = (props: FolderUnknowLineProps) => (
  <Icon name="folder-unknow-line" {...props} />
);
