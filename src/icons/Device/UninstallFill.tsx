import React from "react";
import { Icon, IconProps } from "../Icon";

export type UninstallFillProps = Omit<IconProps, "name">;

export const UninstallFill = (props: UninstallFillProps) => (
  <Icon name="uninstall-fill" {...props} />
);
