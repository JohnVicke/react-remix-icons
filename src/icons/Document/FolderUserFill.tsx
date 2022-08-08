import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderUserFillProps = Omit<IconProps, "name">;

export const FolderUserFill = (props: FolderUserFillProps) => (
  <Icon name="folder-user-fill" {...props} />
);
