import React from "react";
import { Icon, IconProps } from "../Icon";

export type Suitcase2LineProps = Omit<IconProps, "name">;

export const Suitcase2Line = (props: Suitcase2LineProps) => (
  <Icon name="suitcase-2-line" {...props} />
);
