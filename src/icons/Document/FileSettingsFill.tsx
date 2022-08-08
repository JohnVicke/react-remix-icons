import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileSettingsFillProps = Omit<IconProps, "name">;

export const FileSettingsFill = (props: FileSettingsFillProps) => (
  <Icon name="file-settings-fill" {...props} />
);
