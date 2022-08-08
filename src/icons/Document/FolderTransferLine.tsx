import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderTransferLineProps = Omit<IconProps, "name">;

export const FolderTransferLine = (props: FolderTransferLineProps) => (
  <Icon name="folder-transfer-line" {...props} />
);
