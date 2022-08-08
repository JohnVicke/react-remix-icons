import React from "react";
import { Icon, IconProps } from "../Icon";

export type HomeFillProps = Omit<IconProps, "name">;

export const HomeFill = (props: HomeFillProps) => (
  <Icon name="home-fill" {...props} />
);
