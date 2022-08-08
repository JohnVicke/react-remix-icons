import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderFillProps = Omit<IconProps, "name">;

export const FolderFill = (props: FolderFillProps) => (
  <Icon name="folder-fill" {...props} />
);
