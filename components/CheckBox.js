import React, { useCallback } from 'react';
import { Checkbox } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

const Checkboxes = () => {
  const [checked, setChecked] = React.useState(false);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setChecked(false);
      };
    }, [])
  );

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default Checkboxes;