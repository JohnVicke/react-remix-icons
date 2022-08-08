import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileShield2FillProps = Omit<IconProps, "name">;

export const FileShield2Fill = (props: FileShield2FillProps) => (
  <Icon name="file-shield-2-fill" {...props} />
);
