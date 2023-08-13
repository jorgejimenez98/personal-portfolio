import { AppLanguage, AppTheme } from '@/types'
import { UiState } from './UIProvider'

type UIActionType =
| { type: 'Ui - Change Theme', payload: AppTheme }
| { type: 'Ui - Change Language', payload: AppLanguage }

export const uiReducer = (state: UiState, action: UIActionType): UiState => {
  switch (action.type) {
    case 'Ui - Change Theme':
      return { ...state, selectedTheme: action.payload }

    case 'Ui - Change Language':
      return { ...state, selectedLanguage: action.payload }

    default:
      return state
  }
}
