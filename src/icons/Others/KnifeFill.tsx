import React from "react";
import { Icon, IconProps } from "../Icon";

export type KnifeFillProps = Omit<IconProps, "name">;

export const KnifeFill = (props: KnifeFillProps) => (
  <Icon name="knife-fill" {...props} />
);
