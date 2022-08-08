import React from "react";
import { Icon, IconProps } from "../Icon";

export type Chat4FillProps = Omit<IconProps, "name">;

export const Chat4Fill = (props: Chat4FillProps) => (
  <Icon name="chat-4-fill" {...props} />
);
