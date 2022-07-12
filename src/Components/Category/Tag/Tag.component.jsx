import { TagBubble } from './Tag.style'

const Tag = ({ big, name }) => {
  return (
    <>
      <TagBubble className={big ? 'big' : ''}>{name}</TagBubble>
    </>
  )
}

export default Tag
