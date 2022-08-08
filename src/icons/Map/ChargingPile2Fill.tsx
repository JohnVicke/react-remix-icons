import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChargingPile2FillProps = Omit<IconProps, "name">;

export const ChargingPile2Fill = (props: ChargingPile2FillProps) => (
  <Icon name="charging-pile-2-fill" {...props} />
);
