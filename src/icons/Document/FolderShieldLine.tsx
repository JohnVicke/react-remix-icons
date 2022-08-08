import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderShieldLineProps = Omit<IconProps, "name">;

export const FolderShieldLine = (props: FolderShieldLineProps) => (
  <Icon name="folder-shield-line" {...props} />
);
