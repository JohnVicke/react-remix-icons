import React from "react";
import { Icon, IconProps } from "../Icon";

export type DislikeLineProps = Omit<IconProps, "name">;

export const DislikeLine = (props: DislikeLineProps) => (
  <Icon name="dislike-line" {...props} />
);
