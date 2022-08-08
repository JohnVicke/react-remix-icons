import React from "react";
import { Icon, IconProps } from "../Icon";

export type OrderPlayFillProps = Omit<IconProps, "name">;

export const OrderPlayFill = (props: OrderPlayFillProps) => (
  <Icon name="order-play-fill" {...props} />
);
