import React from "react";
import { Icon, IconProps } from "../Icon";

export type LungsFillProps = Omit<IconProps, "name">;

export const LungsFill = (props: LungsFillProps) => (
  <Icon name="lungs-fill" {...props} />
);
