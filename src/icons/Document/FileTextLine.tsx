import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileTextLineProps = Omit<IconProps, "name">;

export const FileTextLine = (props: FileTextLineProps) => (
  <Icon name="file-text-line" {...props} />
);
