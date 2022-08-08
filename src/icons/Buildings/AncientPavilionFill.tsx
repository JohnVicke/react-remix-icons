import React from "react";
import { Icon, IconProps } from "../Icon";

export type AncientPavilionFillProps = Omit<IconProps, "name">;

export const AncientPavilionFill = (props: AncientPavilionFillProps) => (
  <Icon name="ancient-pavilion-fill" {...props} />
);
