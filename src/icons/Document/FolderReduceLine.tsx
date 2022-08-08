import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderReduceLineProps = Omit<IconProps, "name">;

export const FolderReduceLine = (props: FolderReduceLineProps) => (
  <Icon name="folder-reduce-line" {...props} />
);
