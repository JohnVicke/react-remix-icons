import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileWord2FillProps = Omit<IconProps, "name">;

export const FileWord2Fill = (props: FileWord2FillProps) => (
  <Icon name="file-word-2-fill" {...props} />
);
