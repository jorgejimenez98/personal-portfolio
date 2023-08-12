import React from 'react'

const HeaderItemList: React.FC = () => {
  const headerItems = [
    { label: 'Projects' },
    { label: 'Experience' },
    { label: 'Social media' },
    { label: 'Education' },
  ]

  return headerItems.map((item, idx) => (
    <li key={idx}><a>{item.label}</a></li>
  ))
}

export default HeaderItemList
