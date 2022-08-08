import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileShieldFillProps = Omit<IconProps, "name">;

export const FileShieldFill = (props: FileShieldFillProps) => (
  <Icon name="file-shield-fill" {...props} />
);
