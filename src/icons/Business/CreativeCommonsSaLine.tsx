import React from "react";
import { Icon, IconProps } from "../Icon";

export type CreativeCommonsSaLineProps = Omit<IconProps, "name">;

export const CreativeCommonsSaLine = (props: CreativeCommonsSaLineProps) => (
  <Icon name="creative-commons-sa-line" {...props} />
);
