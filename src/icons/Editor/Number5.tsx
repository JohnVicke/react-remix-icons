import React from "react";
import { Icon, IconProps } from "../Icon";

export type Number5Props = Omit<IconProps, "name">;

export const Number5 = (props: Number5Props) => (
  <Icon name="number-5" {...props} />
);
