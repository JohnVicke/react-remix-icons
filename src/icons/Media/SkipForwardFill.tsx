import React from "react";
import { Icon, IconProps } from "../Icon";

export type SkipForwardFillProps = Omit<IconProps, "name">;

export const SkipForwardFill = (props: SkipForwardFillProps) => (
  <Icon name="skip-forward-fill" {...props} />
);
