import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderReceivedFillProps = Omit<IconProps, "name">;

export const FolderReceivedFill = (props: FolderReceivedFillProps) => (
  <Icon name="folder-received-fill" {...props} />
);
