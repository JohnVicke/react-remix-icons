import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitPullRequestLineProps = Omit<IconProps, "name">;

export const GitPullRequestLine = (props: GitPullRequestLineProps) => (
  <Icon name="git-pull-request-line" {...props} />
);
