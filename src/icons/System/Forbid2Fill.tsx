import React from "react";
import { Icon, IconProps } from "../Icon";

export type Forbid2FillProps = Omit<IconProps, "name">;

export const Forbid2Fill = (props: Forbid2FillProps) => (
  <Icon name="forbid-2-fill" {...props} />
);
