import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileUnknowLineProps = Omit<IconProps, "name">;

export const FileUnknowLine = (props: FileUnknowLineProps) => (
  <Icon name="file-unknow-line" {...props} />
);
