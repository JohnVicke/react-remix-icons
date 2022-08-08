import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderLineProps = Omit<IconProps, "name">;

export const FolderLine = (props: FolderLineProps) => (
  <Icon name="folder-line" {...props} />
);
