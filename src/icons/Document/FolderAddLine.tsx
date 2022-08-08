import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderAddLineProps = Omit<IconProps, "name">;

export const FolderAddLine = (props: FolderAddLineProps) => (
  <Icon name="folder-add-line" {...props} />
);
