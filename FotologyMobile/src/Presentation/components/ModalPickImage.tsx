import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, View } from 'react-native';
import { RoundedButton } from './RoundedButton';

interface Props {
  openGallery: () => void;
  openCamera: () => void;
  modalUseState: boolean;
  setModalUseState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalPickImage = ({ openGallery, openCamera, setModalUseState, modalUseState }: Props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalUseState}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalUseState(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Seleccione una opción</Text>
            <View style={styles.buttonContainer}>
              <RoundedButton
                onPress={() => {
                  openGallery();
                  setModalUseState(false);
                }}
                text={'Galería'}
              />
            </View>
            <View style={styles.buttonContainer}>
              <RoundedButton
                onPress={() => {
                  openCamera();
                  setModalUseState(false);
                }}
                text={'Cámara'}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 250,
    height: 200,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 8,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalPickImage;
