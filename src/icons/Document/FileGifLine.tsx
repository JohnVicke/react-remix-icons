import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileGifLineProps = Omit<IconProps, "name">;

export const FileGifLine = (props: FileGifLineProps) => (
  <Icon name="file-gif-line" {...props} />
);
