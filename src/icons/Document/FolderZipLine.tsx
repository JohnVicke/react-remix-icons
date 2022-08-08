import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderZipLineProps = Omit<IconProps, "name">;

export const FolderZipLine = (props: FolderZipLineProps) => (
  <Icon name="folder-zip-line" {...props} />
);
