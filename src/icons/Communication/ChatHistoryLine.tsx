import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatHistoryLineProps = Omit<IconProps, "name">;

export const ChatHistoryLine = (props: ChatHistoryLineProps) => (
  <Icon name="chat-history-line" {...props} />
);
