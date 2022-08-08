import React from "react";
import { Icon, IconProps } from "../Icon";

export type RainbowFillProps = Omit<IconProps, "name">;

export const RainbowFill = (props: RainbowFillProps) => (
  <Icon name="rainbow-fill" {...props} />
);
