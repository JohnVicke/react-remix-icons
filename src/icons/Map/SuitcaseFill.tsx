import React from "react";
import { Icon, IconProps } from "../Icon";

export type SuitcaseFillProps = Omit<IconProps, "name">;

export const SuitcaseFill = (props: SuitcaseFillProps) => (
  <Icon name="suitcase-fill" {...props} />
);
