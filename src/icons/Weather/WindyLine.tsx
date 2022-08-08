import React from "react";
import { Icon, IconProps } from "../Icon";

export type WindyLineProps = Omit<IconProps, "name">;

export const WindyLine = (props: WindyLineProps) => (
  <Icon name="windy-line" {...props} />
);
