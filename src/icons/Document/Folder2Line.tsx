import React from "react";
import { Icon, IconProps } from "../Icon";

export type Folder2LineProps = Omit<IconProps, "name">;

export const Folder2Line = (props: Folder2LineProps) => (
  <Icon name="folder-2-line" {...props} />
);
