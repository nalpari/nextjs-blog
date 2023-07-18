import { NextPage } from 'next'
import Link from 'next/link'

const BtnArea: NextPage = () => {
  return (
    <>
      <div>
        <Link href="/">HOME</Link> <Link href="/test">TEST</Link>{' '}
      </div>
    </>
  )
}

export default BtnArea
