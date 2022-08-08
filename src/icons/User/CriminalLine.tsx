import React from "react";
import { Icon, IconProps } from "../Icon";

export type CriminalLineProps = Omit<IconProps, "name">;

export const CriminalLine = (props: CriminalLineProps) => (
  <Icon name="criminal-line" {...props} />
);
