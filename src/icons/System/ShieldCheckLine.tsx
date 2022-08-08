import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShieldCheckLineProps = Omit<IconProps, "name">;

export const ShieldCheckLine = (props: ShieldCheckLineProps) => (
  <Icon name="shield-check-line" {...props} />
);
