import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderInfoFillProps = Omit<IconProps, "name">;

export const FolderInfoFill = (props: FolderInfoFillProps) => (
  <Icon name="folder-info-fill" {...props} />
);
