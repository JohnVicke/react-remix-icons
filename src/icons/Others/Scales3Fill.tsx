import React from "react";
import { Icon, IconProps } from "../Icon";

export type Scales3FillProps = Omit<IconProps, "name">;

export const Scales3Fill = (props: Scales3FillProps) => (
  <Icon name="scales-3-fill" {...props} />
);
