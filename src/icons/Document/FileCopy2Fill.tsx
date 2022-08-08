import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileCopy2FillProps = Omit<IconProps, "name">;

export const FileCopy2Fill = (props: FileCopy2FillProps) => (
  <Icon name="file-copy-2-fill" {...props} />
);
