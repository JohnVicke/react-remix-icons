import React from "react";
import { Icon, IconProps } from "../Icon";

export type CriminalFillProps = Omit<IconProps, "name">;

export const CriminalFill = (props: CriminalFillProps) => (
  <Icon name="criminal-fill" {...props} />
);
