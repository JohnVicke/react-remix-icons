import React from "react";
import { Icon, IconProps } from "../Icon";

export type Number4Props = Omit<IconProps, "name">;

export const Number4 = (props: Number4Props) => (
  <Icon name="number-4" {...props} />
);
