import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import DefaultPage from './(components)/DefaultPage';
import HomePage from './(components)/HomePage';

export default async function Home ({searchParams}) {
  const { s } = searchParams
  const session = await getServerSession(options)
  return (
    <div>
    {session? <HomePage search={s}/>: <DefaultPage />}
    </div>
  )
}
