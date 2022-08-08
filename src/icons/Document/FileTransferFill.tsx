import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileTransferFillProps = Omit<IconProps, "name">;

export const FileTransferFill = (props: FileTransferFillProps) => (
  <Icon name="file-transfer-fill" {...props} />
);
