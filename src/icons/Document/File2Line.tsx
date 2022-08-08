import React from "react";
import { Icon, IconProps } from "../Icon";

export type File2LineProps = Omit<IconProps, "name">;

export const File2Line = (props: File2LineProps) => (
  <Icon name="file-2-line" {...props} />
);
