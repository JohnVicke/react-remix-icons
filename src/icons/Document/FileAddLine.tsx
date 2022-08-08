import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileAddLineProps = Omit<IconProps, "name">;

export const FileAddLine = (props: FileAddLineProps) => (
  <Icon name="file-add-line" {...props} />
);
