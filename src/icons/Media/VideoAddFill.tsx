import React from "react";
import { Icon, IconProps } from "../Icon";

export type VideoAddFillProps = Omit<IconProps, "name">;

export const VideoAddFill = (props: VideoAddFillProps) => (
  <Icon name="video-add-fill" {...props} />
);
