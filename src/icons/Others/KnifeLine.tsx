import React from "react";
import { Icon, IconProps } from "../Icon";

export type KnifeLineProps = Omit<IconProps, "name">;

export const KnifeLine = (props: KnifeLineProps) => (
  <Icon name="knife-line" {...props} />
);
