import React from "react";
import { Icon, IconProps } from "../Icon";

export type SunFoggyLineProps = Omit<IconProps, "name">;

export const SunFoggyLine = (props: SunFoggyLineProps) => (
  <Icon name="sun-foggy-line" {...props} />
);
