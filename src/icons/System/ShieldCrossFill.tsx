import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShieldCrossFillProps = Omit<IconProps, "name">;

export const ShieldCrossFill = (props: ShieldCrossFillProps) => (
  <Icon name="shield-cross-fill" {...props} />
);
