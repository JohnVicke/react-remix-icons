import React from "react";
import { Icon, IconProps } from "../Icon";

export type GradienterFillProps = Omit<IconProps, "name">;

export const GradienterFill = (props: GradienterFillProps) => (
  <Icon name="gradienter-fill" {...props} />
);
