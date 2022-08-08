import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderForbidLineProps = Omit<IconProps, "name">;

export const FolderForbidLine = (props: FolderForbidLineProps) => (
  <Icon name="folder-forbid-line" {...props} />
);
