import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoonLineProps = Omit<IconProps, "name">;

export const MoonLine = (props: MoonLineProps) => (
  <Icon name="moon-line" {...props} />
);
