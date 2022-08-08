import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileSettingsLineProps = Omit<IconProps, "name">;

export const FileSettingsLine = (props: FileSettingsLineProps) => (
  <Icon name="file-settings-line" {...props} />
);
