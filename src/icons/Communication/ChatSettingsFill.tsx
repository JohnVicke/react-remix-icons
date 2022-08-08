import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatSettingsFillProps = Omit<IconProps, "name">;

export const ChatSettingsFill = (props: ChatSettingsFillProps) => (
  <Icon name="chat-settings-fill" {...props} />
);
