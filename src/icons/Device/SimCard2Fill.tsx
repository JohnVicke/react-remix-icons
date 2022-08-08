import React from "react";
import { Icon, IconProps } from "../Icon";

export type SimCard2FillProps = Omit<IconProps, "name">;

export const SimCard2Fill = (props: SimCard2FillProps) => (
  <Icon name="sim-card-2-fill" {...props} />
);
