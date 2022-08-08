import React from "react";
import { Icon, IconProps } from "../Icon";

export type Forbid2LineProps = Omit<IconProps, "name">;

export const Forbid2Line = (props: Forbid2LineProps) => (
  <Icon name="forbid-2-line" {...props} />
);
