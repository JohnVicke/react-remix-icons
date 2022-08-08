import React from "react";
import { Icon, IconProps } from "../Icon";

export type BracketsFillProps = Omit<IconProps, "name">;

export const BracketsFill = (props: BracketsFillProps) => (
  <Icon name="brackets-fill" {...props} />
);
