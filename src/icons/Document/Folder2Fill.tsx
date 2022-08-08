import React from "react";
import { Icon, IconProps } from "../Icon";

export type Folder2FillProps = Omit<IconProps, "name">;

export const Folder2Fill = (props: Folder2FillProps) => (
  <Icon name="folder-2-fill" {...props} />
);
