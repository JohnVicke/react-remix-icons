import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderForbidFillProps = Omit<IconProps, "name">;

export const FolderForbidFill = (props: FolderForbidFillProps) => (
  <Icon name="folder-forbid-fill" {...props} />
);
