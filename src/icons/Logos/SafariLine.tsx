import React from "react";
import { Icon, IconProps } from "../Icon";

export type SafariLineProps = Omit<IconProps, "name">;

export const SafariLine = (props: SafariLineProps) => (
  <Icon name="safari-line" {...props} />
);
