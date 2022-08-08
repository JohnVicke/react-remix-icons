import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileSearchFillProps = Omit<IconProps, "name">;

export const FileSearchFill = (props: FileSearchFillProps) => (
  <Icon name="file-search-fill" {...props} />
);
