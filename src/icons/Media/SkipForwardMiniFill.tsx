import React from "react";
import { Icon, IconProps } from "../Icon";

export type SkipForwardMiniFillProps = Omit<IconProps, "name">;

export const SkipForwardMiniFill = (props: SkipForwardMiniFillProps) => (
  <Icon name="skip-forward-mini-fill" {...props} />
);
