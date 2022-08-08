import React from "react";
import { Icon, IconProps } from "../Icon";

export type StockLineProps = Omit<IconProps, "name">;

export const StockLine = (props: StockLineProps) => (
  <Icon name="stock-line" {...props} />
);
