import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderZipFillProps = Omit<IconProps, "name">;

export const FolderZipFill = (props: FolderZipFillProps) => (
  <Icon name="folder-zip-fill" {...props} />
);
