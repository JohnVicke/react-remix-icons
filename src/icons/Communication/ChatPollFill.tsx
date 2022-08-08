import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatPollFillProps = Omit<IconProps, "name">;

export const ChatPollFill = (props: ChatPollFillProps) => (
  <Icon name="chat-poll-fill" {...props} />
);
