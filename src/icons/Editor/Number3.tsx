import React from "react";
import { Icon, IconProps } from "../Icon";

export type Number3Props = Omit<IconProps, "name">;

export const Number3 = (props: Number3Props) => (
  <Icon name="number-3" {...props} />
);
