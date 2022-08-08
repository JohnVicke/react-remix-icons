import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderAddFillProps = Omit<IconProps, "name">;

export const FolderAddFill = (props: FolderAddFillProps) => (
  <Icon name="folder-add-fill" {...props} />
);
