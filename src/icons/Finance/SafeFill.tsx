import React from "react";
import { Icon, IconProps } from "../Icon";

export type SafeFillProps = Omit<IconProps, "name">;

export const SafeFill = (props: SafeFillProps) => (
  <Icon name="safe-fill" {...props} />
);
