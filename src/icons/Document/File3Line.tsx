import React from "react";
import { Icon, IconProps } from "../Icon";

export type File3LineProps = Omit<IconProps, "name">;

export const File3Line = (props: File3LineProps) => (
  <Icon name="file-3-line" {...props} />
);
