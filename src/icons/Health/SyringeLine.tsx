import React from "react";
import { Icon, IconProps } from "../Icon";

export type SyringeLineProps = Omit<IconProps, "name">;

export const SyringeLine = (props: SyringeLineProps) => (
  <Icon name="syringe-line" {...props} />
);
