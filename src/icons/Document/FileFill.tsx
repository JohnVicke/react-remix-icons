import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileFillProps = Omit<IconProps, "name">;

export const FileFill = (props: FileFillProps) => (
  <Icon name="file-fill" {...props} />
);
