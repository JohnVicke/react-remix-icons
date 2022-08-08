import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileReduceFillProps = Omit<IconProps, "name">;

export const FileReduceFill = (props: FileReduceFillProps) => (
  <Icon name="file-reduce-fill" {...props} />
);
