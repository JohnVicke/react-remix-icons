import React from "react";
import { Icon, IconProps } from "../Icon";

export type Number2Props = Omit<IconProps, "name">;

export const Number2 = (props: Number2Props) => (
  <Icon name="number-2" {...props} />
);
