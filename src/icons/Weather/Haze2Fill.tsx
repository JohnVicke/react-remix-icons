import React from "react";
import { Icon, IconProps } from "../Icon";

export type Haze2FillProps = Omit<IconProps, "name">;

export const Haze2Fill = (props: Haze2FillProps) => (
  <Icon name="haze-2-fill" {...props} />
);
