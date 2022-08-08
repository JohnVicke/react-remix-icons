import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatSettingsLineProps = Omit<IconProps, "name">;

export const ChatSettingsLine = (props: ChatSettingsLineProps) => (
  <Icon name="chat-settings-line" {...props} />
);
