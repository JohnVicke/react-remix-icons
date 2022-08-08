import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatDeleteFillProps = Omit<IconProps, "name">;

export const ChatDeleteFill = (props: ChatDeleteFillProps) => (
  <Icon name="chat-delete-fill" {...props} />
);
