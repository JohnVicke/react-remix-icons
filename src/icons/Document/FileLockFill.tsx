import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileLockFillProps = Omit<IconProps, "name">;

export const FileLockFill = (props: FileLockFillProps) => (
  <Icon name="file-lock-fill" {...props} />
);
