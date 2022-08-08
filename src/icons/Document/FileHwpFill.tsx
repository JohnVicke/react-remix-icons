import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileHwpFillProps = Omit<IconProps, "name">;

export const FileHwpFill = (props: FileHwpFillProps) => (
  <Icon name="file-hwp-fill" {...props} />
);
