import React from "react";
import { Icon, IconProps } from "../Icon";

export type Number8Props = Omit<IconProps, "name">;

export const Number8 = (props: Number8Props) => (
  <Icon name="number-8" {...props} />
);
