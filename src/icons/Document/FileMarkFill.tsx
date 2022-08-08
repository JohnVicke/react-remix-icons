import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileMarkFillProps = Omit<IconProps, "name">;

export const FileMarkFill = (props: FileMarkFillProps) => (
  <Icon name="file-mark-fill" {...props} />
);
