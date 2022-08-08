import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailSettingsFillProps = Omit<IconProps, "name">;

export const MailSettingsFill = (props: MailSettingsFillProps) => (
  <Icon name="mail-settings-fill" {...props} />
);
