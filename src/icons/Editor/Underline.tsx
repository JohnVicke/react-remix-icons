import React from "react";
import { Icon, IconProps } from "../Icon";

export type UnderlineProps = Omit<IconProps, "name">;

export const Underline = (props: UnderlineProps) => (
  <Icon name="underline" {...props} />
);
