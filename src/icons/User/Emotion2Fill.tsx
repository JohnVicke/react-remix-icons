import React from "react";
import { Icon, IconProps } from "../Icon";

export type Emotion2FillProps = Omit<IconProps, "name">;

export const Emotion2Fill = (props: Emotion2FillProps) => (
  <Icon name="emotion-2-fill" {...props} />
);
