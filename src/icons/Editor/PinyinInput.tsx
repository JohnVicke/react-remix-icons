import React from "react";
import { Icon, IconProps } from "../Icon";

export type PinyinInputProps = Omit<IconProps, "name">;

export const PinyinInput = (props: PinyinInputProps) => (
  <Icon name="pinyin-input" {...props} />
);
