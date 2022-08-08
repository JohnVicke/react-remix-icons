import React from "react";
import { Icon, IconProps } from "../Icon";

export type Battery2ChargeFillProps = Omit<IconProps, "name">;

export const Battery2ChargeFill = (props: Battery2ChargeFillProps) => (
  <Icon name="battery-2-charge-fill" {...props} />
);
