#!/usr/bin/env bash

REMIX_PATH=./node_modules/remixicon/icons

digits=("" "one" "two" "three" "four" "five" "six" "seven" "eight" "nine" 
        "" "ten" "twenty" "thirty" "forty" "fifty" "sixty" "seventy" "eighty" "ninety")

function number_to_string {
    local number=$1
    local value=0
    local string_num=""
    local index=0
    while ((number > 0)); do
        local remainder=$((number % 10))
        number=$((number / 10))
        index=$((value + remainder))
        value=$((value + 10))
        string_num="$(get_pascal_case ${digits[index]})$(get_pascal_case ${string_num})"
    done

    echo $string_num
}

function get_pascal_case {
  echo "$1" | sed 's/\(^\|[^a-zA-Z]\)[a-z]/\U&/g'
}

function get_react_component_content {
  react_import="import React from \"react\";"
  icon_import="import { Icon, IconProps } from \"../Icon\";"
  props_def="export type ${1}Props = Omit<IconProps, \"name\">;"
  component="export const ${1} = (props: ${1}Props) => (\n  <Icon name=\"$2\" {...props} />\n);"
  echo -e "$react_import\n$icon_import\n\n$props_def\n\n$component"
}

icons_generated=0
echo "import \"remixicon/fonts/remixicon.css\";" > ./src/index.tsx
echo "export const iconNames = {" > ./src/icons/iconNames.ts

for dir in $REMIX_PATH; do
  name=$(basename $dir)
  for file in $dir/*; do
   if [ ! -d "./src/icons/$file" ]; then
      pathname=$(basename $file)
      mkdir -p ./src/icons/$pathname
      echo "Creating folder ./src/icons/$pathname"
   else
     echo "Folder $pathname already exists"
   fi

    files=$(ls $file)
    for file in $files; do
      icon=$(echo $file | cut -d'.' -f1);
      IFS='-' read -ra icon_arr <<< "$icon"
      icon_name=""

      if [[ ${icon_arr[0]} =~ ^[0-9]+$ ]]; then
        icon_name=$(number_to_string ${icon_arr[0]})
      elif [[ ${icon_arr[0]::1} =~ ^[0-9]+$ ]]; then
        icon_name="$(number_to_string ${icon_arr[0]::1})$(get_pascal_case ${icon_arr[0]:1})"
      else 
        icon_name=$(get_pascal_case ${icon_arr[0]})
      fi 

      for i in "${icon_arr[@]:1}"; do
        icon_name=($icon_name$(get_pascal_case $i))
      done

      get_react_component_content $icon_name $icon > ./src/icons/$pathname/$icon_name.tsx

      echo "  $icon_name: \"$icon\"," >> ./src/icons/iconNames.ts

      echo "Creating ./src/icons/$pathname/$icon_name.tsx"

      echo "export * from \"./icons/$pathname/$icon_name\";" >> ./src/index.tsx
      icons_generated=$((icons_generated + 1))

    done
  done
done

echo "};" >> ./src/icons/iconNames.ts

npm run lint -- --fix

echo "Finished generating $icons_generated icons"

