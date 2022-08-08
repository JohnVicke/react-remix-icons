import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileEditFillProps = Omit<IconProps, "name">;

export const FileEditFill = (props: FileEditFillProps) => (
  <Icon name="file-edit-fill" {...props} />
);
