import React from "react";
import { Icon, IconProps } from "../Icon";

export type SimCard2LineProps = Omit<IconProps, "name">;

export const SimCard2Line = (props: SimCard2LineProps) => (
  <Icon name="sim-card-2-line" {...props} />
);
