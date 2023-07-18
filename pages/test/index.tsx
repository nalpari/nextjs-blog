import { NextPage } from 'next'

interface Props {
  message: string
}

export async function getServerSideProps() {
  return {
    props: {
      message: 'Hello World',
    },
  }
}

const Test: NextPage<Props> = ({ message }) => {
  return (
    <>
      <h1>Test</h1>
      <p>{message}</p>
    </>
  )
}

export default Test
