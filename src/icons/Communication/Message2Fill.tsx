import React from "react";
import { Icon, IconProps } from "../Icon";

export type Message2FillProps = Omit<IconProps, "name">;

export const Message2Fill = (props: Message2FillProps) => (
  <Icon name="message-2-fill" {...props} />
);
