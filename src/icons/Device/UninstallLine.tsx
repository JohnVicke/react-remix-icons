import React from "react";
import { Icon, IconProps } from "../Icon";

export type UninstallLineProps = Omit<IconProps, "name">;

export const UninstallLine = (props: UninstallLineProps) => (
  <Icon name="uninstall-line" {...props} />
);
