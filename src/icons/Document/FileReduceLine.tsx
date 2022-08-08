import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileReduceLineProps = Omit<IconProps, "name">;

export const FileReduceLine = (props: FileReduceLineProps) => (
  <Icon name="file-reduce-line" {...props} />
);
