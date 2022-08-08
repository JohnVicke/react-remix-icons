import React from "react";
import { Icon, IconProps } from "../Icon";

export type CactusFillProps = Omit<IconProps, "name">;

export const CactusFill = (props: CactusFillProps) => (
  <Icon name="cactus-fill" {...props} />
);
