import React from "react";
import { Icon, IconProps } from "../Icon";

export type StockFillProps = Omit<IconProps, "name">;

export const StockFill = (props: StockFillProps) => (
  <Icon name="stock-fill" {...props} />
);
