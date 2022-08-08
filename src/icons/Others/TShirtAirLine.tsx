import React from "react";
import { Icon, IconProps } from "../Icon";

export type TShirtAirLineProps = Omit<IconProps, "name">;

export const TShirtAirLine = (props: TShirtAirLineProps) => (
  <Icon name="t-shirt-air-line" {...props} />
);
