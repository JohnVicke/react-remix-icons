import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileSearchLineProps = Omit<IconProps, "name">;

export const FileSearchLine = (props: FileSearchLineProps) => (
  <Icon name="file-search-line" {...props} />
);
