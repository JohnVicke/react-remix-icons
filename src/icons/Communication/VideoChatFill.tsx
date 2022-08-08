import React from "react";
import { Icon, IconProps } from "../Icon";

export type VideoChatFillProps = Omit<IconProps, "name">;

export const VideoChatFill = (props: VideoChatFillProps) => (
  <Icon name="video-chat-fill" {...props} />
);
