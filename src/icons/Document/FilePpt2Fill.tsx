import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilePpt2FillProps = Omit<IconProps, "name">;

export const FilePpt2Fill = (props: FilePpt2FillProps) => (
  <Icon name="file-ppt-2-fill" {...props} />
);
