/**
 * @author Samuel Weke
 */

import Skeleton from '@material-ui/lab/Skeleton'

export const MovieCardSkeleton = () => {
  return (
    <>
      <Skeleton variant="rect" width={200} height={300}></Skeleton>
      <Skeleton variant="text" width={150}></Skeleton>
      <Skeleton variant="text" width={50}></Skeleton>
    </>
  )
}
