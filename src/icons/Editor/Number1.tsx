import React from "react";
import { Icon, IconProps } from "../Icon";

export type Number1Props = Omit<IconProps, "name">;

export const Number1 = (props: Number1Props) => (
  <Icon name="number-1" {...props} />
);
