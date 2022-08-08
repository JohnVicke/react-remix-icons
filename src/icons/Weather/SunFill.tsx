import React from "react";
import { Icon, IconProps } from "../Icon";

export type SunFillProps = Omit<IconProps, "name">;

export const SunFill = (props: SunFillProps) => (
  <Icon name="sun-fill" {...props} />
);
