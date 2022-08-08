import React from "react";
import { Icon, IconProps } from "../Icon";

export type Projector2FillProps = Omit<IconProps, "name">;

export const Projector2Fill = (props: Projector2FillProps) => (
  <Icon name="projector-2-fill" {...props} />
);
