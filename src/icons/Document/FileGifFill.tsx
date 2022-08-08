import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileGifFillProps = Omit<IconProps, "name">;

export const FileGifFill = (props: FileGifFillProps) => (
  <Icon name="file-gif-fill" {...props} />
);
