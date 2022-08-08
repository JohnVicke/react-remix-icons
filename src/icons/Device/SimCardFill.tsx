import React from "react";
import { Icon, IconProps } from "../Icon";

export type SimCardFillProps = Omit<IconProps, "name">;

export const SimCardFill = (props: SimCardFillProps) => (
  <Icon name="sim-card-fill" {...props} />
);
