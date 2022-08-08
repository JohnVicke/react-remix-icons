import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShieldKeyholeFillProps = Omit<IconProps, "name">;

export const ShieldKeyholeFill = (props: ShieldKeyholeFillProps) => (
  <Icon name="shield-keyhole-fill" {...props} />
);
