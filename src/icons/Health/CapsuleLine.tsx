import React from "react";
import { Icon, IconProps } from "../Icon";

export type CapsuleLineProps = Omit<IconProps, "name">;

export const CapsuleLine = (props: CapsuleLineProps) => (
  <Icon name="capsule-line" {...props} />
);
