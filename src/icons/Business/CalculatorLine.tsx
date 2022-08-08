import React from "react";
import { Icon, IconProps } from "../Icon";

export type CalculatorLineProps = Omit<IconProps, "name">;

export const CalculatorLine = (props: CalculatorLineProps) => (
  <Icon name="calculator-line" {...props} />
);
