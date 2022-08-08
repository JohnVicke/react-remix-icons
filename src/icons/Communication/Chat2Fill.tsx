import React from "react";
import { Icon, IconProps } from "../Icon";

export type Chat2FillProps = Omit<IconProps, "name">;

export const Chat2Fill = (props: Chat2FillProps) => (
  <Icon name="chat-2-fill" {...props} />
);
