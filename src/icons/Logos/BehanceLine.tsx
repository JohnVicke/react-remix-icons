import React from "react";
import { Icon, IconProps } from "../Icon";

export type BehanceLineProps = Omit<IconProps, "name">;

export const BehanceLine = (props: BehanceLineProps) => (
  <Icon name="behance-line" {...props} />
);
