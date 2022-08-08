import React from "react";
import { Icon, IconProps } from "../Icon";

export type SkipForwardLineProps = Omit<IconProps, "name">;

export const SkipForwardLine = (props: SkipForwardLineProps) => (
  <Icon name="skip-forward-line" {...props} />
);
