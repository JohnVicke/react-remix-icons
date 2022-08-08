import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderTransferFillProps = Omit<IconProps, "name">;

export const FolderTransferFill = (props: FolderTransferFillProps) => (
  <Icon name="folder-transfer-fill" {...props} />
);
