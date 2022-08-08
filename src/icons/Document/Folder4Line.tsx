import React from "react";
import { Icon, IconProps } from "../Icon";

export type Folder4LineProps = Omit<IconProps, "name">;

export const Folder4Line = (props: Folder4LineProps) => (
  <Icon name="folder-4-line" {...props} />
);
