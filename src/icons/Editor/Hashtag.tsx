import React from "react";
import { Icon, IconProps } from "../Icon";

export type HashtagProps = Omit<IconProps, "name">;

export const Hashtag = (props: HashtagProps) => (
  <Icon name="hashtag" {...props} />
);
