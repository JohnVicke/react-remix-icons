import React from "react";
import { Icon, IconProps } from "../Icon";

export type Chat1FillProps = Omit<IconProps, "name">;

export const Chat1Fill = (props: Chat1FillProps) => (
  <Icon name="chat-1-fill" {...props} />
);
