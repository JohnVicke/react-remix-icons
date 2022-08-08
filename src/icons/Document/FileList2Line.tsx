import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileList2LineProps = Omit<IconProps, "name">;

export const FileList2Line = (props: FileList2LineProps) => (
  <Icon name="file-list-2-line" {...props} />
);
