import React from "react";
import { Icon, IconProps } from "../Icon";

export type CupFillProps = Omit<IconProps, "name">;

export const CupFill = (props: CupFillProps) => (
  <Icon name="cup-fill" {...props} />
);
