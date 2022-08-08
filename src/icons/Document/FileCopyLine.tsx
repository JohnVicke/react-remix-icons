import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileCopyLineProps = Omit<IconProps, "name">;

export const FileCopyLine = (props: FileCopyLineProps) => (
  <Icon name="file-copy-line" {...props} />
);
