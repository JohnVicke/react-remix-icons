import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderSharedFillProps = Omit<IconProps, "name">;

export const FolderSharedFill = (props: FolderSharedFillProps) => (
  <Icon name="folder-shared-fill" {...props} />
);
