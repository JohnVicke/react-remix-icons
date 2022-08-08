import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileUserLineProps = Omit<IconProps, "name">;

export const FileUserLine = (props: FileUserLineProps) => (
  <Icon name="file-user-line" {...props} />
);
