import React from "react";
import { Icon, IconProps } from "../Icon";

export type PencilFillProps = Omit<IconProps, "name">;

export const PencilFill = (props: PencilFillProps) => (
  <Icon name="pencil-fill" {...props} />
);
