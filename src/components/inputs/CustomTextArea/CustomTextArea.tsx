import React from 'react'
import { useField, FieldHookConfig } from 'formik'


export const CustomTextArea: React.FC<FieldHookConfig<string>> = ({ placeholder, className, ...props }) => {
  const [field, meta] = useField(props)
  const hasError = meta.touched && meta.error

  return (
    <div className='form-control'>
      <textarea
        {...field}
        placeholder={placeholder}
        className={`
        textarea h-28 textarea-bordered
          ${hasError ? 'textarea-error' : ''}
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
