import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlaneFillProps = Omit<IconProps, "name">;

export const PlaneFill = (props: PlaneFillProps) => (
  <Icon name="plane-fill" {...props} />
);
