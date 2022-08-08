import React from "react";
import { Icon, IconProps } from "../Icon";

export type SuitcaseLineProps = Omit<IconProps, "name">;

export const SuitcaseLine = (props: SuitcaseLineProps) => (
  <Icon name="suitcase-line" {...props} />
);
