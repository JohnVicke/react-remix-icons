import React from "react";
import { Icon, IconProps } from "../Icon";

export type Projector2LineProps = Omit<IconProps, "name">;

export const Projector2Line = (props: Projector2LineProps) => (
  <Icon name="projector-2-line" {...props} />
);
