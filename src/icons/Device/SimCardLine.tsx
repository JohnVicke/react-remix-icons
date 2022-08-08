import React from "react";
import { Icon, IconProps } from "../Icon";

export type SimCardLineProps = Omit<IconProps, "name">;

export const SimCardLine = (props: SimCardLineProps) => (
  <Icon name="sim-card-line" {...props} />
);
