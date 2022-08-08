import React from "react";
import { Icon, IconProps } from "../Icon";

export type Haze2LineProps = Omit<IconProps, "name">;

export const Haze2Line = (props: Haze2LineProps) => (
  <Icon name="haze-2-line" {...props} />
);
