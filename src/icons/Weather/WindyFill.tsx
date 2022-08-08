import React from "react";
import { Icon, IconProps } from "../Icon";

export type WindyFillProps = Omit<IconProps, "name">;

export const WindyFill = (props: WindyFillProps) => (
  <Icon name="windy-fill" {...props} />
);
