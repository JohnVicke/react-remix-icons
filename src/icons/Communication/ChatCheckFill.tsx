import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatCheckFillProps = Omit<IconProps, "name">;

export const ChatCheckFill = (props: ChatCheckFillProps) => (
  <Icon name="chat-check-fill" {...props} />
);
