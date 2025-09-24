import React, { useState } from 'react'
import { Item } from './styles'
import { FaChevronDown } from 'react-icons/fa'

type Props = { q: string; a: string }

export default function FAQ({ q, a }: Props) {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(o => !o)

  return (
    <Item data-open={open}>
      <button
        type="button"
        className="question"
        onClick={toggle}
        aria-expanded={open}
      >
        <span>{q}</span>
        <FaChevronDown className="icon" />
      </button>

      <div className={`answer ${open ? 'open' : ''}`}>
        <p>{a}</p>
      </div>
    </Item>
  )
}
