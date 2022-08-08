import React from "react";
import { Icon, IconProps } from "../Icon";

export type BasketballFillProps = Omit<IconProps, "name">;

export const BasketballFill = (props: BasketballFillProps) => (
  <Icon name="basketball-fill" {...props} />
);
