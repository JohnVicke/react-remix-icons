import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatOffFillProps = Omit<IconProps, "name">;

export const ChatOffFill = (props: ChatOffFillProps) => (
  <Icon name="chat-off-fill" {...props} />
);
