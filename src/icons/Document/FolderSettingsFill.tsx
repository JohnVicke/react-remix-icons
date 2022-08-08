import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderSettingsFillProps = Omit<IconProps, "name">;

export const FolderSettingsFill = (props: FolderSettingsFillProps) => (
  <Icon name="folder-settings-fill" {...props} />
);
