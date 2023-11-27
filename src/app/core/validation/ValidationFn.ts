import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validateServiceAccessebility(): ValidatorFn {
  const serviceAccessibilityList = [
    'Ascenseur',
    'Interphone',
    'Puce Port',
    'Gardien',
    'Parking',
    'Internet',
    'Parabole Collectif',
  ];
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (serviceAccessibilityList.indexOf(control.value) == -1)
      return { serviceAccessibilityInvalid: true };
    return null;
  };
}

export function validatePieces(): ValidatorFn {
  const piecesList = ['SALON', 'TERRACE', 'BALCONY', 'CLOSETS', 'GARDEN'];

  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (piecesList.indexOf(control.value) == -1) return { pieceInvalid: true };
    return null;
  };
}

export function validatehygiene(): ValidatorFn {
  const hygieneList = [
    "Réservoir D'eau",
    'Pompe A Eau',
    'Toilettes Séparées',
    'Toilettes Non Séparées',
    'Salle De Bain',
  ];

  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (hygieneList.indexOf(control.value) == -1)
      return { hygienInvalid: true };
    return null;
  };
}

export function validatePublicService(): ValidatorFn {
  const publicServcieList = [
    'Jardin Public',
    'Tribunal',
    'École Primaire',
    'École secondaire',
    'Lycée',
    'Banque',
  ];
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (publicServcieList.indexOf(control.value) == -1)
      return { publicServiceInvalid: true };
    return null;
  };
}

export function validateNumber(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isNotNumber = isNaN(control.value);
    return isNotNumber ? { notANumber: { value: control.value } } : null;
  };
}
export function validatePhoneNumber(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const phoneNum = control.value.match(/\d/g);
      const isValid = phoneNum && phoneNum.length === 10;
      return isValid ? null : { phoneNotValid: { value: control.value } };
    }
    return null;
  };
}
