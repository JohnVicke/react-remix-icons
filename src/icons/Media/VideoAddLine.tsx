import React from "react";
import { Icon, IconProps } from "../Icon";

export type VideoAddLineProps = Omit<IconProps, "name">;

export const VideoAddLine = (props: VideoAddLineProps) => (
  <Icon name="video-add-line" {...props} />
);
