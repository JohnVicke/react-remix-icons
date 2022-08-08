import React from "react";
import { Icon, IconProps } from "../Icon";

export type Folder3LineProps = Omit<IconProps, "name">;

export const Folder3Line = (props: Folder3LineProps) => (
  <Icon name="folder-3-line" {...props} />
);
