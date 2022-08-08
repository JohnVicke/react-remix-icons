import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserSettingsFillProps = Omit<IconProps, "name">;

export const UserSettingsFill = (props: UserSettingsFillProps) => (
  <Icon name="user-settings-fill" {...props} />
);
