import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserSettingsLineProps = Omit<IconProps, "name">;

export const UserSettingsLine = (props: UserSettingsLineProps) => (
  <Icon name="user-settings-line" {...props} />
);
