import React from "react";
import { Icon, IconProps } from "../Icon";

export type RainbowLineProps = Omit<IconProps, "name">;

export const RainbowLine = (props: RainbowLineProps) => (
  <Icon name="rainbow-line" {...props} />
);
