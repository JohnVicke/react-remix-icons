import React from "react";
import { Icon, IconProps } from "../Icon";

export type Folder4FillProps = Omit<IconProps, "name">;

export const Folder4Fill = (props: Folder4FillProps) => (
  <Icon name="folder-4-fill" {...props} />
);
