import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileShield2LineProps = Omit<IconProps, "name">;

export const FileShield2Line = (props: FileShield2LineProps) => (
  <Icon name="file-shield-2-line" {...props} />
);
