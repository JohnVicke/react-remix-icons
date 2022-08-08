import React from "react";
import { Icon, IconProps } from "../Icon";

export type VideoUploadLineProps = Omit<IconProps, "name">;

export const VideoUploadLine = (props: VideoUploadLineProps) => (
  <Icon name="video-upload-line" {...props} />
);
