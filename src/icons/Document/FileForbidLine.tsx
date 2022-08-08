import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileForbidLineProps = Omit<IconProps, "name">;

export const FileForbidLine = (props: FileForbidLineProps) => (
  <Icon name="file-forbid-line" {...props} />
);
