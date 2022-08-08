import React from "react";
import { Icon, IconProps } from "../Icon";

export type BriefcaseFillProps = Omit<IconProps, "name">;

export const BriefcaseFill = (props: BriefcaseFillProps) => (
  <Icon name="briefcase-fill" {...props} />
);
