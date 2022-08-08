import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoonFoggyFillProps = Omit<IconProps, "name">;

export const MoonFoggyFill = (props: MoonFoggyFillProps) => (
  <Icon name="moon-foggy-fill" {...props} />
);
