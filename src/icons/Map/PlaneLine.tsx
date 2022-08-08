import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlaneLineProps = Omit<IconProps, "name">;

export const PlaneLine = (props: PlaneLineProps) => (
  <Icon name="plane-line" {...props} />
);
