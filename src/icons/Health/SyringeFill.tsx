import React from "react";
import { Icon, IconProps } from "../Icon";

export type SyringeFillProps = Omit<IconProps, "name">;

export const SyringeFill = (props: SyringeFillProps) => (
  <Icon name="syringe-fill" {...props} />
);
