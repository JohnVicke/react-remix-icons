import React from "react";
import { Icon, IconProps } from "../Icon";

export type SettingsLineProps = Omit<IconProps, "name">;

export const SettingsLine = (props: SettingsLineProps) => (
  <Icon name="settings-line" {...props} />
);
