import { AppTheme } from '@/types'
import { UiState } from './UIProvider'

type UIActionType = | { type: 'Ui - Change Theme', payload: AppTheme }

export const uiReducer = (state: UiState, action: UIActionType): UiState => {
  switch (action.type) {
    case 'Ui - Change Theme':
      return { ...state, selectedTheme: action.payload }

    default:
      return state
  }
}
