import React from "react";
import { Icon, IconProps } from "../Icon";

export type FahrenheitFillProps = Omit<IconProps, "name">;

export const FahrenheitFill = (props: FahrenheitFillProps) => (
  <Icon name="fahrenheit-fill" {...props} />
);
