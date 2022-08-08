import React from "react";
import { Icon, IconProps } from "../Icon";

export type TrademarkFillProps = Omit<IconProps, "name">;

export const TrademarkFill = (props: TrademarkFillProps) => (
  <Icon name="trademark-fill" {...props} />
);
