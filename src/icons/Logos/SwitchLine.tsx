import React from "react";
import { Icon, IconProps } from "../Icon";

export type SwitchLineProps = Omit<IconProps, "name">;

export const SwitchLine = (props: SwitchLineProps) => (
  <Icon name="switch-line" {...props} />
);
