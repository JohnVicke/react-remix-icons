import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoonFoggyLineProps = Omit<IconProps, "name">;

export const MoonFoggyLine = (props: MoonFoggyLineProps) => (
  <Icon name="moon-foggy-line" {...props} />
);
