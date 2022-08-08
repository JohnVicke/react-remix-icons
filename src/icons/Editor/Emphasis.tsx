import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmphasisProps = Omit<IconProps, "name">;

export const Emphasis = (props: EmphasisProps) => (
  <Icon name="emphasis" {...props} />
);
