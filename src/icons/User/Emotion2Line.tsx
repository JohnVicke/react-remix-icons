import React from "react";
import { Icon, IconProps } from "../Icon";

export type Emotion2LineProps = Omit<IconProps, "name">;

export const Emotion2Line = (props: Emotion2LineProps) => (
  <Icon name="emotion-2-line" {...props} />
);
