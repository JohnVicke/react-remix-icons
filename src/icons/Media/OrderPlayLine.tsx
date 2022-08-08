import React from "react";
import { Icon, IconProps } from "../Icon";

export type OrderPlayLineProps = Omit<IconProps, "name">;

export const OrderPlayLine = (props: OrderPlayLineProps) => (
  <Icon name="order-play-line" {...props} />
);
