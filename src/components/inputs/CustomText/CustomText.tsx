import React from 'react'
import { useField, FieldHookConfig } from 'formik'

export const CustomTextInput: React.FC<FieldHookConfig<string>> = ({ placeholder, className, ...props }) => {
  const [field, meta] = useField(props)
  const hasError = meta.touched && meta.error

  return (
    <div className='form-control'>
      <input
        type='text'
        {...field}
        placeholder={placeholder}
        className={`
          input input-bordered
          ${hasError ? 'input-error' : ''}
          ${className || ''}
        `}
      />
      {hasError && (
        <span className='label-text-alt -mt-3 mb-3'>
          {meta.error}
        </span>
      )}
    </div>
  )
}
