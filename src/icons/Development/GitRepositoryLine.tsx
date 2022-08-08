import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitRepositoryLineProps = Omit<IconProps, "name">;

export const GitRepositoryLine = (props: GitRepositoryLineProps) => (
  <Icon name="git-repository-line" {...props} />
);
