import React from "react";
import { Icon, IconProps } from "../Icon";

export type CreativeCommonsZeroLineProps = Omit<IconProps, "name">;

export const CreativeCommonsZeroLine = (
  props: CreativeCommonsZeroLineProps
) => <Icon name="creative-commons-zero-line" {...props} />;
