import React from "react";
import { Icon, IconProps } from "../Icon";

export type VirusLineProps = Omit<IconProps, "name">;

export const VirusLine = (props: VirusLineProps) => (
  <Icon name="virus-line" {...props} />
);
