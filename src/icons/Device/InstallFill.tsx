import React from "react";
import { Icon, IconProps } from "../Icon";

export type InstallFillProps = Omit<IconProps, "name">;

export const InstallFill = (props: InstallFillProps) => (
  <Icon name="install-fill" {...props} />
);
