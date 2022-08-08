import React from "react";
import { Icon, IconProps } from "../Icon";

export type SwitchFillProps = Omit<IconProps, "name">;

export const SwitchFill = (props: SwitchFillProps) => (
  <Icon name="switch-fill" {...props} />
);
