import React from "react";
import { Icon, IconProps } from "../Icon";

export type TShirtAirFillProps = Omit<IconProps, "name">;

export const TShirtAirFill = (props: TShirtAirFillProps) => (
  <Icon name="t-shirt-air-fill" {...props} />
);
