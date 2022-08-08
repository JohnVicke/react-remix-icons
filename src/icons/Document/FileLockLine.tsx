import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileLockLineProps = Omit<IconProps, "name">;

export const FileLockLine = (props: FileLockLineProps) => (
  <Icon name="file-lock-line" {...props} />
);
