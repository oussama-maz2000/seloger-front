import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validateServiceAccessebility(): ValidatorFn {
  const serviceAccessibilityList = [
    'ELEVATOR',
    'INTERCOM',
    'CHIP PORT',
    'GUARDIAN',
    'PARKING',
    'COLLECTION PARABLES',
    'INTERNET',
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
    'WATER_ANK',
    'WATER PUMP',
    'BATHROOM',
    'SEPARATE TOILET',
    'NO SEPARATE TOILET',
  ];

  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (hygieneList.indexOf(control.value) == -1)
      return { hygienInvalid: true };
    return null;
  };
}

export function validatePublicService(): ValidatorFn {
  const publicServcieList = [
    'PRIMARY SCHOOL',
    'SECONDARY SCHOOL',
    'HIGH SCHOOL',
    'BALCONY',
    'BANK',
    'PUBLIC GARDEN',
    'COURT',
    'TOWN HALL',
  ];
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (publicServcieList.indexOf(control.value) == -1)
      return { publicServiceInvalid: true };
    return null;
  };
}

export function validateNumber(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (Number.isNaN(control.value)) return { invalidNum: true };
    return null;
  };
}
