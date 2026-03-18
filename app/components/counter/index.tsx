'use client'

import { decrement, increment } from "@/app/lib/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "@/app/lib/hook"


export default function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}