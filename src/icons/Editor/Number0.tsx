import React from "react";
import { Icon, IconProps } from "../Icon";

export type Number0Props = Omit<IconProps, "name">;

export const Number0 = (props: Number0Props) => (
  <Icon name="number-0" {...props} />
);
