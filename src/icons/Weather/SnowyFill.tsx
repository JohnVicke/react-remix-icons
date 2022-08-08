import React from "react";
import { Icon, IconProps } from "../Icon";

export type SnowyFillProps = Omit<IconProps, "name">;

export const SnowyFill = (props: SnowyFillProps) => (
  <Icon name="snowy-fill" {...props} />
);
