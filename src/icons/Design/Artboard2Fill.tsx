import React from "react";
import { Icon, IconProps } from "../Icon";

export type Artboard2FillProps = Omit<IconProps, "name">;

export const Artboard2Fill = (props: Artboard2FillProps) => (
  <Icon name="artboard-2-fill" {...props} />
);
