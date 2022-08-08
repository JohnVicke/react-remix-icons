import React from "react";
import { Icon, IconProps } from "../Icon";

export type MediumFillProps = Omit<IconProps, "name">;

export const MediumFill = (props: MediumFillProps) => (
  <Icon name="medium-fill" {...props} />
);
