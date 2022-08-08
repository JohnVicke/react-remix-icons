import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileList2FillProps = Omit<IconProps, "name">;

export const FileList2Fill = (props: FileList2FillProps) => (
  <Icon name="file-list-2-fill" {...props} />
);
