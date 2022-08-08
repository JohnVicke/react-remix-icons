import React from "react";
import { Icon, IconProps } from "../Icon";

export type ForbidFillProps = Omit<IconProps, "name">;

export const ForbidFill = (props: ForbidFillProps) => (
  <Icon name="forbid-fill" {...props} />
);
