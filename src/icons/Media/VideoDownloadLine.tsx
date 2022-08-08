import React from "react";
import { Icon, IconProps } from "../Icon";

export type VideoDownloadLineProps = Omit<IconProps, "name">;

export const VideoDownloadLine = (props: VideoDownloadLineProps) => (
  <Icon name="video-download-line" {...props} />
);
