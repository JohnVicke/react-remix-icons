import React from "react";
import { Icon, IconProps } from "../Icon";

export type FoldersFillProps = Omit<IconProps, "name">;

export const FoldersFill = (props: FoldersFillProps) => (
  <Icon name="folders-fill" {...props} />
);
