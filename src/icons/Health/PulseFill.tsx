import React from "react";
import { Icon, IconProps } from "../Icon";

export type PulseFillProps = Omit<IconProps, "name">;

export const PulseFill = (props: PulseFillProps) => (
  <Icon name="pulse-fill" {...props} />
);
