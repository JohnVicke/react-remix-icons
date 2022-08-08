import React from "react";
import { Icon, IconProps } from "../Icon";

export type Number7Props = Omit<IconProps, "name">;

export const Number7 = (props: Number7Props) => (
  <Icon name="number-7" {...props} />
);
