import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmphasisCnProps = Omit<IconProps, "name">;

export const EmphasisCn = (props: EmphasisCnProps) => (
  <Icon name="emphasis-cn" {...props} />
);
