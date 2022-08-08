import React from "react";
import { Icon, IconProps } from "../Icon";

export type VideoChatLineProps = Omit<IconProps, "name">;

export const VideoChatLine = (props: VideoChatLineProps) => (
  <Icon name="video-chat-line" {...props} />
);
