import React from "react";
import { Icon, IconProps } from "../Icon";

export type CelsiusLineProps = Omit<IconProps, "name">;

export const CelsiusLine = (props: CelsiusLineProps) => (
  <Icon name="celsius-line" {...props} />
);
