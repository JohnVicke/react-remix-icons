import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoonClearFillProps = Omit<IconProps, "name">;

export const MoonClearFill = (props: MoonClearFillProps) => (
  <Icon name="moon-clear-fill" {...props} />
);
