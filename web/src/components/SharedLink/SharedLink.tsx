
interface LinkProps {
  title: string
  points: number
  username: string
  commentCount: number
  link: string
}

const Link = ({ title, points, username, commentCount, link}: LinkProps) => {
  return (
    <div className="flex gap-5">

      <div className="flex flex-col">
      <button>Vote Up </button>
      <button>Vote Down</button>
      </div>

      <div className="flex-1">
      <h2>{title}</h2>
      <p>{points} points by submitted by {username} {commentCount} comments</p>
      </div>

      <div>
      <a href={link}>Arrow</a>
      </div>
    </div>
  )
}

export default Link
