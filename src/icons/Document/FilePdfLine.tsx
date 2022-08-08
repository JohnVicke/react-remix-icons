import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilePdfLineProps = Omit<IconProps, "name">;

export const FilePdfLine = (props: FilePdfLineProps) => (
  <Icon name="file-pdf-line" {...props} />
);
