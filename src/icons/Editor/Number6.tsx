import React from "react";
import { Icon, IconProps } from "../Icon";

export type Number6Props = Omit<IconProps, "name">;

export const Number6 = (props: Number6Props) => (
  <Icon name="number-6" {...props} />
);
