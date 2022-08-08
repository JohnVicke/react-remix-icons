import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitlabFillProps = Omit<IconProps, "name">;

export const GitlabFill = (props: GitlabFillProps) => (
  <Icon name="gitlab-fill" {...props} />
);
