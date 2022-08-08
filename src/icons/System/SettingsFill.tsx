import React from "react";
import { Icon, IconProps } from "../Icon";

export type SettingsFillProps = Omit<IconProps, "name">;

export const SettingsFill = (props: SettingsFillProps) => (
  <Icon name="settings-fill" {...props} />
);
