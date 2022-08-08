import React from "react";
import { Icon, IconProps } from "../Icon";

export type File4LineProps = Omit<IconProps, "name">;

export const File4Line = (props: File4LineProps) => (
  <Icon name="file-4-line" {...props} />
);
