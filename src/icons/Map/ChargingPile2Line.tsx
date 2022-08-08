import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChargingPile2LineProps = Omit<IconProps, "name">;

export const ChargingPile2Line = (props: ChargingPile2LineProps) => (
  <Icon name="charging-pile-2-line" {...props} />
);
