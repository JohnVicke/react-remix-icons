import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileEditLineProps = Omit<IconProps, "name">;

export const FileEditLine = (props: FileEditLineProps) => (
  <Icon name="file-edit-line" {...props} />
);
