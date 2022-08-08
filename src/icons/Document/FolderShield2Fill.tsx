import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderShield2FillProps = Omit<IconProps, "name">;

export const FolderShield2Fill = (props: FolderShield2FillProps) => (
  <Icon name="folder-shield-2-fill" {...props} />
);
