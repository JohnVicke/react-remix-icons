import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderSettingsLineProps = Omit<IconProps, "name">;

export const FolderSettingsLine = (props: FolderSettingsLineProps) => (
  <Icon name="folder-settings-line" {...props} />
);
