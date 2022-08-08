import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileTransferLineProps = Omit<IconProps, "name">;

export const FileTransferLine = (props: FileTransferLineProps) => (
  <Icon name="file-transfer-line" {...props} />
);
