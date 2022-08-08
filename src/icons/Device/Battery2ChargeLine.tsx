import React from "react";
import { Icon, IconProps } from "../Icon";

export type Battery2ChargeLineProps = Omit<IconProps, "name">;

export const Battery2ChargeLine = (props: Battery2ChargeLineProps) => (
  <Icon name="battery-2-charge-line" {...props} />
);
