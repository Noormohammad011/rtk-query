import { useGetVideosQuery } from '../../features/api/apiSlice'
import Video from './Video'
import VideoLoader from '../ui/loaders/VideoLoader'
import Error from '../ui/Error'
import { useEffect } from 'react'
export default function Videos() {
   const { data: videos, isLoading, isError } = useGetVideosQuery()
  // const { data: videos, isLoading, isError, refetch } = useGetVideosQuery(
  //   undefined, {
  //     refetchOnFocus: true,//window focus
  //     refetchOnReconnect: true,//network reconnect
  //     refetchOnMountOrArgChange: true,//mount or arg change
  //     skip: true,//skip query note useState to handle this
  //     pollingInterval: 5000,//polling interval (ms)
  //   }
  // )



  let content = null
  if (isLoading) {
    content = (
      <>
        <VideoLoader></VideoLoader>
        <VideoLoader></VideoLoader>
        <VideoLoader></VideoLoader>
        <VideoLoader></VideoLoader>
      </>
    )
  }
  if (!isLoading && isError) {
    content = <Error messge='There is an errror' />
  }
  if (!isLoading && !isError && videos?.length === 0) {
    content = <Error messge='No videos found' />
  }
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => <Video key={video.id} video={video} />)
  }
  return content
}
