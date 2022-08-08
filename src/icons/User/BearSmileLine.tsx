import React from "react";
import { Icon, IconProps } from "../Icon";

export type BearSmileLineProps = Omit<IconProps, "name">;

export const BearSmileLine = (props: BearSmileLineProps) => (
  <Icon name="bear-smile-line" {...props} />
);
