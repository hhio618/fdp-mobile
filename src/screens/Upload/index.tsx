import * as React from 'react';

import {StyleSheet, View, ScrollView, Text, Button} from 'react-native';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
} from 'react-native-document-picker';
import {useEffect} from 'react';
import {fdp} from 'fdp/client';
import Toast from 'react-native-toast-message';

// require the module
const RNFS = require('react-native-fs');

export function Upload() {
  const [result, setResult] =
    React.useState<
      Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
    >();

  const [fileBinaryData, setFileBinaryData] = React.useState<any>();

  const showSuccessUploadToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Dear User',
      text2: 'Your file has been successfully uploaded',
    });
  };
  const showFailureUploadToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Dear User',
      text2: 'Your file has been failed, try later or check settings',
    });
  };

  useEffect(() => {
    const files = JSON.stringify(result, null, 2);
    if (files && files.length > 0) {
      console.log(JSON.parse(files)[0]['uri']);
      const selectedFileInfo: any = JSON.parse(files)[0];
      console.log(`file data: ${JSON.stringify(selectedFileInfo)}`);
      RNFS.readFile(selectedFileInfo['uri'], 'base64').then((fileBin: any) => {
        console.log(`Bin data: ${fileBin}`);
        setFileBinaryData(fileBin);
      });
      try {
        fdp.file
          .uploadData('default', selectedFileInfo['uri'], 'Hooraay!!')
          .then(() => {
            showSuccessUploadToast();
          })
          .catch((e: any) => {
            showFailureUploadToast();
          });
      } catch (e: any) {
        showFailureUploadToast();
      }
    }
  }, [result, fileBinaryData]);

  const handleError = (err: unknown) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="open picker for single file selection"
        onPress={async () => {
          try {
            const pickerResult = await DocumentPicker.pickSingle({
              presentationStyle: 'fullScreen',
              copyTo: 'cachesDirectory',
            });
            setResult([pickerResult]);
          } catch (e) {
            handleError(e);
          }
        }}
      />
      <Text style={styles.text} selectable>
        Result: {JSON.stringify(result, null, 2)}
      </Text>
      {fileBinaryData && (
        <Text style={styles.text}>Bin data is loaded into fileBinaryData</Text>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00897b',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  text: {
    color: 'white',
    marginTop: 10,
  },
});
