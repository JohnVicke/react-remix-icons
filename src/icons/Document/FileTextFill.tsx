import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileTextFillProps = Omit<IconProps, "name">;

export const FileTextFill = (props: FileTextFillProps) => (
  <Icon name="file-text-fill" {...props} />
);
