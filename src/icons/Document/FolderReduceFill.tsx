import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderReduceFillProps = Omit<IconProps, "name">;

export const FolderReduceFill = (props: FolderReduceFillProps) => (
  <Icon name="folder-reduce-fill" {...props} />
);
