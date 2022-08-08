import React from "react";
import { Icon, IconProps } from "../Icon";

export type KnifeBloodFillProps = Omit<IconProps, "name">;

export const KnifeBloodFill = (props: KnifeBloodFillProps) => (
  <Icon name="knife-blood-fill" {...props} />
);
