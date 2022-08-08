import React from "react";
import { Icon, IconProps } from "../Icon";

export type VideoLineProps = Omit<IconProps, "name">;

export const VideoLine = (props: VideoLineProps) => (
  <Icon name="video-line" {...props} />
);
