import React from "react";
import { Icon, IconProps } from "../Icon";

export type InstallLineProps = Omit<IconProps, "name">;

export const InstallLine = (props: InstallLineProps) => (
  <Icon name="install-line" {...props} />
);
