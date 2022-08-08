import React from "react";
import { Icon, IconProps } from "../Icon";

export type DrizzleLineProps = Omit<IconProps, "name">;

export const DrizzleLine = (props: DrizzleLineProps) => (
  <Icon name="drizzle-line" {...props} />
);
