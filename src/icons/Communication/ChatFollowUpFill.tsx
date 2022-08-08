import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatFollowUpFillProps = Omit<IconProps, "name">;

export const ChatFollowUpFill = (props: ChatFollowUpFillProps) => (
  <Icon name="chat-follow-up-fill" {...props} />
);
