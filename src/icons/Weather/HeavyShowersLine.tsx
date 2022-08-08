import React from "react";
import { Icon, IconProps } from "../Icon";

export type HeavyShowersLineProps = Omit<IconProps, "name">;

export const HeavyShowersLine = (props: HeavyShowersLineProps) => (
  <Icon name="heavy-showers-line" {...props} />
);
