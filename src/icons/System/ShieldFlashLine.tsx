import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShieldFlashLineProps = Omit<IconProps, "name">;

export const ShieldFlashLine = (props: ShieldFlashLineProps) => (
  <Icon name="shield-flash-line" {...props} />
);
