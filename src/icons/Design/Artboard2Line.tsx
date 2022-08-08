import React from "react";
import { Icon, IconProps } from "../Icon";

export type Artboard2LineProps = Omit<IconProps, "name">;

export const Artboard2Line = (props: Artboard2LineProps) => (
  <Icon name="artboard-2-line" {...props} />
);
