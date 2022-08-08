import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderInfoLineProps = Omit<IconProps, "name">;

export const FolderInfoLine = (props: FolderInfoLineProps) => (
  <Icon name="folder-info-line" {...props} />
);
