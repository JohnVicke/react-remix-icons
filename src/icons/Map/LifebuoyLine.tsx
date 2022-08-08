import React from "react";
import { Icon, IconProps } from "../Icon";

export type LifebuoyLineProps = Omit<IconProps, "name">;

export const LifebuoyLine = (props: LifebuoyLineProps) => (
  <Icon name="lifebuoy-line" {...props} />
);
