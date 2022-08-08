import React from "react";
import { Icon, IconProps } from "../Icon";

export type FahrenheitLineProps = Omit<IconProps, "name">;

export const FahrenheitLine = (props: FahrenheitLineProps) => (
  <Icon name="fahrenheit-line" {...props} />
);
