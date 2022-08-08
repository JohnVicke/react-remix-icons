import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitRepositoryFillProps = Omit<IconProps, "name">;

export const GitRepositoryFill = (props: GitRepositoryFillProps) => (
  <Icon name="git-repository-fill" {...props} />
);
