import React from "react";
import { Icon, IconProps } from "../Icon";

export type ToggleLineProps = Omit<IconProps, "name">;

export const ToggleLine = (props: ToggleLineProps) => (
  <Icon name="toggle-line" {...props} />
);
