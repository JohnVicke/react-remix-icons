import React from "react";
import { Icon, IconProps } from "../Icon";

export type KnifeBloodLineProps = Omit<IconProps, "name">;

export const KnifeBloodLine = (props: KnifeBloodLineProps) => (
  <Icon name="knife-blood-line" {...props} />
);
