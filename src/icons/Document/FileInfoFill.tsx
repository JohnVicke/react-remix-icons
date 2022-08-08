import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileInfoFillProps = Omit<IconProps, "name">;

export const FileInfoFill = (props: FileInfoFillProps) => (
  <Icon name="file-info-fill" {...props} />
);
