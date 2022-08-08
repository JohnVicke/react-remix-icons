import React from "react";
import { Icon, IconProps } from "../Icon";

export type TrademarkLineProps = Omit<IconProps, "name">;

export const TrademarkLine = (props: TrademarkLineProps) => (
  <Icon name="trademark-line" {...props} />
);
