import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShieldLineProps = Omit<IconProps, "name">;

export const ShieldLine = (props: ShieldLineProps) => (
  <Icon name="shield-line" {...props} />
);
