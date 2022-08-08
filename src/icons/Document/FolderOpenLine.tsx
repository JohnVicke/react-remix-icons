import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderOpenLineProps = Omit<IconProps, "name">;

export const FolderOpenLine = (props: FolderOpenLineProps) => (
  <Icon name="folder-open-line" {...props} />
);
