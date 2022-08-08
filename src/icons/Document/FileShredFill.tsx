import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileShredFillProps = Omit<IconProps, "name">;

export const FileShredFill = (props: FileShredFillProps) => (
  <Icon name="file-shred-fill" {...props} />
);
