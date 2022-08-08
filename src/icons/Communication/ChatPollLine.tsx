import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatPollLineProps = Omit<IconProps, "name">;

export const ChatPollLine = (props: ChatPollLineProps) => (
  <Icon name="chat-poll-line" {...props} />
);
