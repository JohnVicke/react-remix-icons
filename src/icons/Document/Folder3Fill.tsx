import React from "react";
import { Icon, IconProps } from "../Icon";

export type Folder3FillProps = Omit<IconProps, "name">;

export const Folder3Fill = (props: Folder3FillProps) => (
  <Icon name="folder-3-fill" {...props} />
);
