import React from "react";
import { Icon, IconProps } from "../Icon";

export type HammerLineProps = Omit<IconProps, "name">;

export const HammerLine = (props: HammerLineProps) => (
  <Icon name="hammer-line" {...props} />
);
