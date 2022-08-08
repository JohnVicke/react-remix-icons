import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileShieldLineProps = Omit<IconProps, "name">;

export const FileShieldLine = (props: FileShieldLineProps) => (
  <Icon name="file-shield-line" {...props} />
);
