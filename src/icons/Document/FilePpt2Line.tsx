import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilePpt2LineProps = Omit<IconProps, "name">;

export const FilePpt2Line = (props: FilePpt2LineProps) => (
  <Icon name="file-ppt-2-line" {...props} />
);
