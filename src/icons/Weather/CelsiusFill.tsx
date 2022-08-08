import React from "react";
import { Icon, IconProps } from "../Icon";

export type CelsiusFillProps = Omit<IconProps, "name">;

export const CelsiusFill = (props: CelsiusFillProps) => (
  <Icon name="celsius-fill" {...props} />
);
