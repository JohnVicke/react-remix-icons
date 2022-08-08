import React from "react";
import { Icon, IconProps } from "../Icon";

export type CalculatorFillProps = Omit<IconProps, "name">;

export const CalculatorFill = (props: CalculatorFillProps) => (
  <Icon name="calculator-fill" {...props} />
);
