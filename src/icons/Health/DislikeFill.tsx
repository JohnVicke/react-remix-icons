import React from "react";
import { Icon, IconProps } from "../Icon";

export type DislikeFillProps = Omit<IconProps, "name">;

export const DislikeFill = (props: DislikeFillProps) => (
  <Icon name="dislike-fill" {...props} />
);
