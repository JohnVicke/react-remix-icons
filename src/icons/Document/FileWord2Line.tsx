import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileWord2LineProps = Omit<IconProps, "name">;

export const FileWord2Line = (props: FileWord2LineProps) => (
  <Icon name="file-word-2-line" {...props} />
);
