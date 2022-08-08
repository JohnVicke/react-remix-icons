import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileCopy2LineProps = Omit<IconProps, "name">;

export const FileCopy2Line = (props: FileCopy2LineProps) => (
  <Icon name="file-copy-2-line" {...props} />
);
