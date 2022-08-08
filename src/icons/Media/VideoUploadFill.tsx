import React from "react";
import { Icon, IconProps } from "../Icon";

export type VideoUploadFillProps = Omit<IconProps, "name">;

export const VideoUploadFill = (props: VideoUploadFillProps) => (
  <Icon name="video-upload-fill" {...props} />
);
