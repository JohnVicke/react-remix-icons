import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderHistoryFillProps = Omit<IconProps, "name">;

export const FolderHistoryFill = (props: FolderHistoryFillProps) => (
  <Icon name="folder-history-fill" {...props} />
);
