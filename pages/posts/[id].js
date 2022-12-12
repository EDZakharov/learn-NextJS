import { useRouter } from 'next/router'

export default function PostId() {
  const router = useRouter()
  return <h1>postID {router.query.id}</h1>
}
