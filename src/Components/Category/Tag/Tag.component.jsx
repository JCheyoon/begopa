import { TagBubble } from './Tag.style'

const Tag = ({ big, name, onClick }) => {
  return (
    <>
      <TagBubble className={big ? 'big' : ''} onClick={onClick}>
        {name}
      </TagBubble>
    </>
  )
}

export default Tag
