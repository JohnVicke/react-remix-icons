import React from "react";
import { Icon, IconProps } from "../Icon";

export type Skull2FillProps = Omit<IconProps, "name">;

export const Skull2Fill = (props: Skull2FillProps) => (
  <Icon name="skull-2-fill" {...props} />
);
