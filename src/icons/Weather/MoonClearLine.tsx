import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoonClearLineProps = Omit<IconProps, "name">;

export const MoonClearLine = (props: MoonClearLineProps) => (
  <Icon name="moon-clear-line" {...props} />
);
