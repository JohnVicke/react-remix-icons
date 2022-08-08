import React from "react";
import { Icon, IconProps } from "../Icon";

export type WomenLineProps = Omit<IconProps, "name">;

export const WomenLine = (props: WomenLineProps) => (
  <Icon name="women-line" {...props} />
);
