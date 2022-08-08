import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoonFillProps = Omit<IconProps, "name">;

export const MoonFill = (props: MoonFillProps) => (
  <Icon name="moon-fill" {...props} />
);
