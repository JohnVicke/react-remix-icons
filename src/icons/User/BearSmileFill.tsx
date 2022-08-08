import React from "react";
import { Icon, IconProps } from "../Icon";

export type BearSmileFillProps = Omit<IconProps, "name">;

export const BearSmileFill = (props: BearSmileFillProps) => (
  <Icon name="bear-smile-fill" {...props} />
);
