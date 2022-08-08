import React from "react";
import { Icon, IconProps } from "../Icon";

export type HammerFillProps = Omit<IconProps, "name">;

export const HammerFill = (props: HammerFillProps) => (
  <Icon name="hammer-fill" {...props} />
);
