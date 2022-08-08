import React from "react";
import { Icon, IconProps } from "../Icon";

export type HonourLineProps = Omit<IconProps, "name">;

export const HonourLine = (props: HonourLineProps) => (
  <Icon name="honour-line" {...props} />
);
