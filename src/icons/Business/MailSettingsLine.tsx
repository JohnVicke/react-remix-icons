import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailSettingsLineProps = Omit<IconProps, "name">;

export const MailSettingsLine = (props: MailSettingsLineProps) => (
  <Icon name="mail-settings-line" {...props} />
);
