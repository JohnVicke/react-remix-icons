import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShieldKeyholeLineProps = Omit<IconProps, "name">;

export const ShieldKeyholeLine = (props: ShieldKeyholeLineProps) => (
  <Icon name="shield-keyhole-line" {...props} />
);
