import React from "react";
import { Icon, IconProps } from "../Icon";

export type GithubFillProps = Omit<IconProps, "name">;

export const GithubFill = (props: GithubFillProps) => (
  <Icon name="github-fill" {...props} />
);
