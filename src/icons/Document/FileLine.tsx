import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileLineProps = Omit<IconProps, "name">;

export const FileLine = (props: FileLineProps) => (
  <Icon name="file-line" {...props} />
);
