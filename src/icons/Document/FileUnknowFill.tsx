import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileUnknowFillProps = Omit<IconProps, "name">;

export const FileUnknowFill = (props: FileUnknowFillProps) => (
  <Icon name="file-unknow-fill" {...props} />
);
