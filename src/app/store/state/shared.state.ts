export interface SharedState {
  showLoading: boolean;
  showAlert: boolean;
  typeAlert: string;
  messageAlert: string;
}

export const initialSharedState: SharedState = {
  showLoading: false,
  showAlert: false,
  typeAlert: '',
  messageAlert: '',
};
