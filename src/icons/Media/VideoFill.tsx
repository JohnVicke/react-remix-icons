import React from "react";
import { Icon, IconProps } from "../Icon";

export type VideoFillProps = Omit<IconProps, "name">;

export const VideoFill = (props: VideoFillProps) => (
  <Icon name="video-fill" {...props} />
);
