import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitPullRequestFillProps = Omit<IconProps, "name">;

export const GitPullRequestFill = (props: GitPullRequestFillProps) => (
  <Icon name="git-pull-request-fill" {...props} />
);
