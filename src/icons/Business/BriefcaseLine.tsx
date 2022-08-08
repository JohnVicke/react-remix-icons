import React from "react";
import { Icon, IconProps } from "../Icon";

export type BriefcaseLineProps = Omit<IconProps, "name">;

export const BriefcaseLine = (props: BriefcaseLineProps) => (
  <Icon name="briefcase-line" {...props} />
);
