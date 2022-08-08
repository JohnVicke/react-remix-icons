import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderUnknowFillProps = Omit<IconProps, "name">;

export const FolderUnknowFill = (props: FolderUnknowFillProps) => (
  <Icon name="folder-unknow-fill" {...props} />
);
