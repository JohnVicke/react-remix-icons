import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderUserLineProps = Omit<IconProps, "name">;

export const FolderUserLine = (props: FolderUserLineProps) => (
  <Icon name="folder-user-line" {...props} />
);
