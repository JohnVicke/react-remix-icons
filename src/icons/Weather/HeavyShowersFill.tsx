import React from "react";
import { Icon, IconProps } from "../Icon";

export type HeavyShowersFillProps = Omit<IconProps, "name">;

export const HeavyShowersFill = (props: HeavyShowersFillProps) => (
  <Icon name="heavy-showers-fill" {...props} />
);
