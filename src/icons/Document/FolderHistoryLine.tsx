import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderHistoryLineProps = Omit<IconProps, "name">;

export const FolderHistoryLine = (props: FolderHistoryLineProps) => (
  <Icon name="folder-history-line" {...props} />
);
