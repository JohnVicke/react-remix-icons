import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitlabLineProps = Omit<IconProps, "name">;

export const GitlabLine = (props: GitlabLineProps) => (
  <Icon name="gitlab-line" {...props} />
);
