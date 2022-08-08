import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileUserFillProps = Omit<IconProps, "name">;

export const FileUserFill = (props: FileUserFillProps) => (
  <Icon name="file-user-fill" {...props} />
);
