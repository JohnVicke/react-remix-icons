import React from "react";
import { Icon, IconProps } from "../Icon";

export type Message3FillProps = Omit<IconProps, "name">;

export const Message3Fill = (props: Message3FillProps) => (
  <Icon name="message-3-fill" {...props} />
);
