import React from "react";
import { Icon, IconProps } from "../Icon";

export type BasketballLineProps = Omit<IconProps, "name">;

export const BasketballLine = (props: BasketballLineProps) => (
  <Icon name="basketball-line" {...props} />
);
