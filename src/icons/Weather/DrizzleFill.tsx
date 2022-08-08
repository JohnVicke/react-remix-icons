import React from "react";
import { Icon, IconProps } from "../Icon";

export type DrizzleFillProps = Omit<IconProps, "name">;

export const DrizzleFill = (props: DrizzleFillProps) => (
  <Icon name="drizzle-fill" {...props} />
);
