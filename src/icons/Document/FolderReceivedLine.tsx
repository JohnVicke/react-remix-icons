import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderReceivedLineProps = Omit<IconProps, "name">;

export const FolderReceivedLine = (props: FolderReceivedLineProps) => (
  <Icon name="folder-received-line" {...props} />
);
