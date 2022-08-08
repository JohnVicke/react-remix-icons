import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileList3FillProps = Omit<IconProps, "name">;

export const FileList3Fill = (props: FileList3FillProps) => (
  <Icon name="file-list-3-fill" {...props} />
);
