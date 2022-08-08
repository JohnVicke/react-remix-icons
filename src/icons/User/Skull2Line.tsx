import React from "react";
import { Icon, IconProps } from "../Icon";

export type Skull2LineProps = Omit<IconProps, "name">;

export const Skull2Line = (props: Skull2LineProps) => (
  <Icon name="skull-2-line" {...props} />
);
