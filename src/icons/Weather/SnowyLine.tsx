import React from "react";
import { Icon, IconProps } from "../Icon";

export type SnowyLineProps = Omit<IconProps, "name">;

export const SnowyLine = (props: SnowyLineProps) => (
  <Icon name="snowy-line" {...props} />
);
