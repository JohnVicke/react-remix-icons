import React from "react";
import { Icon, IconProps } from "../Icon";

export type Number9Props = Omit<IconProps, "name">;

export const Number9 = (props: Number9Props) => (
  <Icon name="number-9" {...props} />
);
