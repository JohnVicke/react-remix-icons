import React from "react";
import { Icon, IconProps } from "../Icon";

export type CreativeCommonsZeroFillProps = Omit<IconProps, "name">;

export const CreativeCommonsZeroFill = (
  props: CreativeCommonsZeroFillProps
) => <Icon name="creative-commons-zero-fill" {...props} />;
