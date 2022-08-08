import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileCopyFillProps = Omit<IconProps, "name">;

export const FileCopyFill = (props: FileCopyFillProps) => (
  <Icon name="file-copy-fill" {...props} />
);
