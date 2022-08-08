import React from "react";
import { Icon, IconProps } from "../Icon";

export type LifebuoyFillProps = Omit<IconProps, "name">;

export const LifebuoyFill = (props: LifebuoyFillProps) => (
  <Icon name="lifebuoy-fill" {...props} />
);
