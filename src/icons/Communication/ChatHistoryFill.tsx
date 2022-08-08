import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatHistoryFillProps = Omit<IconProps, "name">;

export const ChatHistoryFill = (props: ChatHistoryFillProps) => (
  <Icon name="chat-history-fill" {...props} />
);
