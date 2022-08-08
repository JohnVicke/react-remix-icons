import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderShield2LineProps = Omit<IconProps, "name">;

export const FolderShield2Line = (props: FolderShield2LineProps) => (
  <Icon name="folder-shield-2-line" {...props} />
);
