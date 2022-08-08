import React from "react";
import { Icon, IconProps } from "../Icon";

export type BilliardsFillProps = Omit<IconProps, "name">;

export const BilliardsFill = (props: BilliardsFillProps) => (
  <Icon name="billiards-fill" {...props} />
);
