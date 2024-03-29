import React from 'react';
import { FlatList } from 'react-native';

import { ButtonItem } from '.';

import ButtonData from '@/constants/CalculatorButtons';
import type { PlayableGameVariants } from '@/hooks/useGame';

type CalculatorButtonVariants = PlayableGameVariants | 'killer-setup';

interface CalculatorButtonsProps {
  variant: CalculatorButtonVariants;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean | boolean[];
  onHandleSubmit: () => void;
  onDeleteInput: () => void;
  hitTargets?: number[];
  playerTargets?: number[];
}

export const CalculatorButtons = ({
  value,
  setValue,
  disabled,
  onHandleSubmit,
  variant,
  onDeleteInput,
  hitTargets,
  playerTargets,
}: CalculatorButtonsProps) => {
  let data: string[] = [];

  // assign calculator buttons
  if (variant === 'cricket') {
    data = ButtonData.cricket;
  } else if (variant === 'killer') {
    if (playerTargets !== undefined)
      data = playerTargets
        .sort((a, b) => a - b)
        .map((target) => target.toString());
    // fill in empty spaces with disabled block for visual display
    if (data.length % 3 === 0) data.push('Del', '', 'Enter');
    else if (data.length % 5 === 0) {
      data.splice(data.length - 1, 0, '');
      data.push('Del', '', 'Enter');
    } else if (data.length % 2 === 0) {
      data.map((item, index) => {
        if (index % 3 === 0) data.splice(index + 1, 0, '');

        return item;
      });
      data.push('Del', '', 'Enter');
    } else {
      data.splice(data.length - 1, 0, 'Del');
      data.splice(data.length, 0, 'Enter');
    }
  } else data = ButtonData.regular;

  // button on press
  const onButtonPress = (inputValue: string) => {
    // check to see if state setter is undefined
    if (setValue !== undefined) {
      // if button === "Del"
      if (inputValue === 'Del') {
        // delete input function
        onDeleteInput();
        // if button === "Enter"
      } else if (inputValue === 'Enter') {
        // handleSubmit function
        onHandleSubmit();
        setValue('');
        // all other buttons
      } else {
        // check if game is cricket
        if (variant === 'cricket') {
          // assign value to Bull
          if (inputValue === 'Bull') {
            inputValue = '25';
          }
          if (value !== undefined && value.length === 0) {
            setValue(inputValue);
          } else {
            setValue((prev: string) => `${prev},${inputValue}`);
          }
        } else setValue((prev: string) => `${prev}${inputValue}`);
      }
    }
  };

  // for cricket assign mark count on buttons
  const assignHits = (index: number) => {
    let hit = 0;
    if (hitTargets !== undefined)
      hitTargets.forEach((target, i) => {
        if (index === i) {
          hit = target;
        } else if (index === 7) {
          hit = hitTargets[hitTargets.length - 1];
        }
      });

    return hit;
  };

  // for cricket assign disabled buttons after all players hit three marks
  const assignDisabled = (index?: number) => {
    // set default disable to false
    let isDisabled = false;
    // check if disabled prop is provided
    if (disabled !== undefined) {
      // if just boolean value return value
      if (typeof disabled === 'object') {
        // filter disabled[] set value equal to button index
        disabled.filter((value, idx) => {
          // first values index will be the same as boolean array
          if (index === idx) {
            isDisabled = value;
          }
          // if last element assign to index 7 bull button
          else if (index === 7) {
            isDisabled = value;
          }
        });

        return isDisabled;
      } else {
        return (isDisabled = disabled);
      }
    }

    return isDisabled;
  };

  const renderItem = ({ item, index }: { item: string; index: number }) =>
    hitTargets !== undefined ? (
      <ButtonItem
        item={item}
        onButtonPress={onButtonPress}
        disabled={assignDisabled(index)}
        variant={variant}
        hits={assignHits(index)}
      />
    ) : (
      <ButtonItem
        item={item}
        onButtonPress={onButtonPress}
        disabled={assignDisabled()}
        variant={variant}
      />
    );

  return (
    <FlatList
      data={data}
      numColumns={3}
      renderItem={renderItem}
      keyExtractor={(item, index) => (item === '' ? index.toString() : item)}
    />
  );
};
