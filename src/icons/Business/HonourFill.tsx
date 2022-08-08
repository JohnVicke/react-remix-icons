import React from "react";
import { Icon, IconProps } from "../Icon";

export type HonourFillProps = Omit<IconProps, "name">;

export const HonourFill = (props: HonourFillProps) => (
  <Icon name="honour-fill" {...props} />
);
