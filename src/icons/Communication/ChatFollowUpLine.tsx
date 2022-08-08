import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatFollowUpLineProps = Omit<IconProps, "name">;

export const ChatFollowUpLine = (props: ChatFollowUpLineProps) => (
  <Icon name="chat-follow-up-line" {...props} />
);
