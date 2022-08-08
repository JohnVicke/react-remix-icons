import React from "react";
import { Icon, IconProps } from "../Icon";

export type YoutubeLineProps = Omit<IconProps, "name">;

export const YoutubeLine = (props: YoutubeLineProps) => (
  <Icon name="youtube-line" {...props} />
);
