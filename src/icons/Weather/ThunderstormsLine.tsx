import React from "react";
import { Icon, IconProps } from "../Icon";

export type ThunderstormsLineProps = Omit<IconProps, "name">;

export const ThunderstormsLine = (props: ThunderstormsLineProps) => (
  <Icon name="thunderstorms-line" {...props} />
);
