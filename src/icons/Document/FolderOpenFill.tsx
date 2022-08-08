import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderOpenFillProps = Omit<IconProps, "name">;

export const FolderOpenFill = (props: FolderOpenFillProps) => (
  <Icon name="folder-open-fill" {...props} />
);
