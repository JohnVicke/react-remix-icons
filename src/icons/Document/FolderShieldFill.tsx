import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderShieldFillProps = Omit<IconProps, "name">;

export const FolderShieldFill = (props: FolderShieldFillProps) => (
  <Icon name="folder-shield-fill" {...props} />
);
