import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilePptLineProps = Omit<IconProps, "name">;

export const FilePptLine = (props: FilePptLineProps) => (
  <Icon name="file-ppt-line" {...props} />
);
