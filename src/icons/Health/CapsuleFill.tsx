import React from "react";
import { Icon, IconProps } from "../Icon";

export type CapsuleFillProps = Omit<IconProps, "name">;

export const CapsuleFill = (props: CapsuleFillProps) => (
  <Icon name="capsule-fill" {...props} />
);
