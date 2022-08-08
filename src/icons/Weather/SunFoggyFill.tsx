import React from "react";
import { Icon, IconProps } from "../Icon";

export type SunFoggyFillProps = Omit<IconProps, "name">;

export const SunFoggyFill = (props: SunFoggyFillProps) => (
  <Icon name="sun-foggy-fill" {...props} />
);
