import React from "react";
import { Icon, IconProps } from "../Icon";

export type CreativeCommonsSaFillProps = Omit<IconProps, "name">;

export const CreativeCommonsSaFill = (props: CreativeCommonsSaFillProps) => (
  <Icon name="creative-commons-sa-fill" {...props} />
);
