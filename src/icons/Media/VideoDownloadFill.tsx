import React from "react";
import { Icon, IconProps } from "../Icon";

export type VideoDownloadFillProps = Omit<IconProps, "name">;

export const VideoDownloadFill = (props: VideoDownloadFillProps) => (
  <Icon name="video-download-fill" {...props} />
);
